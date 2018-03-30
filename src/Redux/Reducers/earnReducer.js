/**
 * Created by liuyiman on 2017/7/3.
 */
import { combineReducers } from 'redux'
import initializeState from '../State/initializeState'
// 定义一个reducer
function earn( state = initializeState, action ) {
    switch (action.type) {
        case 'ADD_MONEY':
            return{
                ...state,
                money:action.money
            }
        case 'SET_JOB':
            return{
                ...state,
                lastJob:action.job
            }
        case 'BROKE':
            return{
                ...state,
                money:action.money,
                lastJob:action.job
            }
        default:
            return state
    }
}

export default earn
