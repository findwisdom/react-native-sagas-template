import { RQUEST_LATESTNEWS, SUC_LATESTNEWS, DESTORY_LATESTNEWS } from '../Actions/latestnews/types';
import earn from "./earnReducer";

let data = {
    data: {}
}

function latestNews (state = data, action) {
    switch (action.type) {
        case RQUEST_LATESTNEWS:
            return state
        case SUC_LATESTNEWS:
            return Object.assign({}, state, {
                data: action.data
            })
        case DESTORY_LATESTNEWS:
            return null
        default:
            return state;
    }
}
export default latestNews
