import { put, call } from 'redux-saga/effects';
import { SUC_LATESTNEWS } from '../Actions/latestnews/types';
import { requestLatestNews, sucLatestNews, errLatestNews } from "../Actions/latestnews/latestnews";
import Api from '../../Api/index.js';
import https from '../../Common/Util/Https/Https'


export function* getLatestNews() {
    try {
        yield put(requestLatestNews());
        const data = yield call(https.get, "https://www.baidu.com/");
        console.log(data)
        yield put(sucLatestNews(data));
        
    } catch (error) {
        yield put(sucLatestNews());
    }
}
