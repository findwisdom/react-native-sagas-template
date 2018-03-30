/**
 * Created by liuyiman on 2017/7/3.
 */

// 定义一个menoy+的action
function addmoney(money){
    return {
        // 可以用一个文件管理type，之所以是type是因为我的reducer要根据这个来判断
        type: 'ADD_MONEY',
        money
    }
}
function setLastJob(job){
    return {
        type: 'SET_JOB',
        job
    }
}
// 定义一个赚钱的方式1 ，抢劫银行
export function robBank(){
    return (dispatch, getState) => {
        // 赚一百万
        let { earn } = getState()
        dispatch(addmoney(earn.money + 1000000))
        return dispatch(setLastJob('robber'))
    }
}
// 定义一个赚钱的方式2，建材转移者
export function moveBrick(){
    return (dispatch, getState) => {
        let { earn } = getState()
        // 赚一块钱
        dispatch(addmoney( earn.money + 1 ))
        dispatch(setLastJob('brick mover'))
    }
}
// 破产,数据清零
export function goBroke() {
    return {
        type: 'BROKE',
        money: 0,
        job:'broke'
    }
}
