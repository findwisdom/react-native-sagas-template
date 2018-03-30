import { all, takeEvery, fork } from 'redux-saga/effects';

import { FETCHED_LATESTNEWS } from '../Actions/latestnews/types'
import { getLatestNews } from './latestnews';


export default function* rootSaga() {
    
    yield takeEvery(FETCHED_LATESTNEWS, getLatestNews);

}
