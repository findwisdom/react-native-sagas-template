import { RQUEST_LATESTNEWS, SUC_LATESTNEWS, FETCHED_LATESTNEWS, DESTORY_LATESTNEWS } from './types';

//初始请求
export const fetchedLatestNews = () => {
    return {
        type: FETCHED_LATESTNEWS
    }
}
//开始发送请求
export const requestLatestNews = () => {
    return {
        type: RQUEST_LATESTNEWS
    }
}

//请求成功
export const sucLatestNews = (data) => {
    return {
        type: SUC_LATESTNEWS,
        data
    }
}

//请求成功
export const errLatestNews = (data) => {
    return {
        type: ERR_LATESTNEWS
    }
}

//销毁
export const destoryLatestnews = () => {
    return {
        type: DESTORY_LATESTNEWS
    }
}
