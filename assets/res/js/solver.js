
function get_param(params, key, default_value) {
    if (params[key] === undefined) {
        return default_value;
    } else {
        return params[key];
    }
}

/// glpk solver
function solve_glpk(data_str, params_str) {

    let t0 = new Date().getTime();
    let data = JSON.parse(data_str);
    let params = JSON.parse(params_str);
    // (default) params
    // required, b in AX>=b, row-num dict
    let rows = params.rows, counts = Array.from(params.rows, x => params.planItemCounts[x]);
    let objective = {}
    for (let i = 0; i < rows.length; i++)
        objective[rows[i]] = counts[i]
    // if true, use coeff, minimize eff; else coeff=1, minimize num.
    let cost_minimize = get_param(params, 'costMinimize', true);
    // if true, use ILP(simplex + intopt), else only simplex(now).
    let integer_result = get_param(params, 'integerResult', false);
    // other pre-processing should been done in main program.
    let enable_log = get_param(params, ' enableLog', true)
    function log(msg) {
        // quickjs will raise "console" is not defined?
        // if (enable_log)
        //     console.log(msg)
    }

    // main solver
    let col_count = data.colNames.length;
    let row_count = data.rowNames.length;
    glp_set_print_func(log);
    let lp = glp_create_prob();
    glp_set_obj_dir(lp, GLP_MIN); // optimization direction flag - minimization
    glp_add_cols(lp, col_count);
    glp_add_rows(lp, row_count);

    // columns settings, boundary: [0, INF)]
    for (let i = 0; i < col_count; i++) {
        glp_set_col_name(lp, i + 1, data.colNames[i]);  // col_name
        glp_set_col_bnds(lp, i + 1, GLP_LO, 0, 0);      // lower boundary
        glp_set_col_kind(lp, i + 1, GLP_IV);            // integer variable ? if only use simplex, may take no effect
    }

    //rows, boundary: [obj num, INF)
    for (let i = 0; i < row_count; i++) {
        let row_name = data.rowNames[i];
        glp_set_row_name(lp, i + 1, row_name);
        glp_set_row_bnds(lp, i + 1, GLP_LO, objective[row_name] || 0, 0);
    }

    // coefficient: ap or num
    for (let i = 0; i < col_count; i++) {
        if (cost_minimize) {
            log('target: cost min');
            glp_set_obj_coef(lp, i + 1, data.costs[i]); // sum(a_i*x_i)
        } else {
            log('target: num min');
            glp_set_obj_coef(lp, i + 1, 1);// sum(x_i)=num
        }
    }

    // constraint_matrix
    // A[ia,aj]=ar; sparse matrix
    let ia = [null];
    let ja = [null];
    let ar = [null];

    for (let i = 0; i < row_count; i++) {
        for (let j = 0; j < col_count; j++) {
            if (data.matrix[i][j] > 0) {
                ia.push(i + 1);
                ja.push(j + 1);
                ar.push(data.costs[j] / data.matrix[i][j]);
            }
        }
    }
    // log('ia=' + ia);
    // log('ja=' + ja);
    // log('ar=' + ar);
    glp_load_matrix(lp, ar.length - 1, ia, ja, ar); //lp,m*n=max_size,ia,ja,ar

    // solve: simplex then integer optimization(VERY SLOW!)
    glp_simplex(lp, null);
    if (integer_result) {
        glp_intopt(lp, null);
    }

    // results
    log('------------ Summary ------------');
    let total_cost = 0;
    // use aclculated eff: sum v*coeff
    // if(integer_result){
    //     total_eff = glp_mip_obj_val(lp);
    // }else{
    //     total_eff = glp_get_obj_val(lp);
    // }
    let total_num = 0;
    let variables = [];

    for (let col_no = 0; col_no < col_count; col_no++) {
        let col_v = integer_result ? glp_mip_col_val(lp, col_no + 1) : glp_get_col_prim(lp, col_no + 1);
        if (col_v !== 0) {
            let variable = { "name": null, "value": null, "cost": null, "detail": {} };
            let v = Math.ceil(col_v);
            variable["name"] = data.colNames[col_no];
            variable["value"] = v;
            variable["cost"] = data.costs[col_no];
            total_num += v;
            total_cost += v * data.costs[col_no];
            for (let row_no = 0; row_no < row_count; row_no++) {
                let row_name = data.rowNames[row_no];
                let aij = data.matrix[row_no][col_no];
                if (aij > 0 && objective[row_name] > 0) {
                    variable["detail"][row_name] = Math.floor(v * data.costs[col_no] / aij);
                }
            }
            variables.push(variable);
            log(`result ${col_no + 1}, AP ${data.costs[col_no]}, ${v} times. col=${data.colNames[col_no]}`);
        }
    }
    log(`--- input data: ${row_count} rows, ${data.colNames.length} columns, ${ar.length - 1} non-zeros.`);
    log(`total_cost=${total_cost}, total_num=${total_num}.`); // min AP
    let t1 = new Date().getTime();
    log(`Time: ${(t1 - t0) / 1000} s.`);
    log('---------- End Summary ----------');
    return JSON.stringify({ "totalCost": total_cost, "totalNum": total_num, "countVars": variables })
}

function add_log(a) {
    // document.getElementById('logs').innerHTML += '<p>' + a.toString() + '</p>';
    return a.toString();
}