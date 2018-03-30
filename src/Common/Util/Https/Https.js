import { AsyncStorage } from 'react-native';
import Storage from '../DeviceStorage'
// import { Toast} from 'antd-mobile';

class HTTPUtil {
    
    static headsDefault () {
        return {
            'Accept': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            'Content-Type': 'application/json;charset=utf-8'
        }
    }
    
    
    /**
     * 获取headers
     * @param headers
     * @returns {Promise<T>|*|Promise.<TResult>}
     */
    static getheaders = (headers) => {
        return Storage.get('USER').then(function (item) {
            let headers = headers || {}
            // let header =  Object.assign({}, HTTPUtil.headsDefault, {'Authorization': 'Bearer ' + item.access_token}, headers)
            let header =  Object.assign({}, HTTPUtil.headsDefault(), headers)
            return new Headers(header)
        })
    }
    
    
    /**
     * get方法
     * @param url
     * @param headers
     * @param fetchConfig
     * @returns {Promise<T>|*|Promise.<TResult>}
     */
    
    static get (url, headers, fetchConfig) {
        
        let fetchOptions;
        let LOGIN_REQUEST = encodeURI(url);
    
        fetchOptions = Object.assign({
            method: 'GET',
            headers: HTTPUtil.getheaders(headers),
            mode: 'cors',
            cache: 'default',
        }, fetchConfig)
    
        return fetch(LOGIN_REQUEST, fetchOptions)
            .then((response) => {
                if (response.ok || response.status === '200') {
                    return response;
                } else {
                    return {status:response.status}
                }
            })
            .then((response) => {
                return response.headers;
            })
            .catch((err)=> {
                return err;
            })
    
    }
    
    /**
     * post方法
     * @param url
     * @param data
     * @param headers
     * @param fetchConfig
     * @returns {Promise<T>|*|Promise.<TResult>}
     */
    
    static post (url, data, headers, fetchConfig) {
    
        let fetchOptions;
        let LOGIN_REQUEST = encodeURI(url);
    
        fetchOptions = Object.assign({
            method: 'POST',
            headers: HTTPUtil.getheaders(headers),
            mode: 'cors',
            cache: 'default',
            body: data
        }, fetchConfig)
    
        return fetch(LOGIN_REQUEST, fetchOptions)
            .then((response) => {
                if (response.ok || response.status === '200') {
                    return response;
                } else {
                    return {status:response.status}
                }
            })
            .then((response) => {
                return response.headers;
            })
            .catch((err)=> {
                return err;
            })
        
    }
    
    static async fetchs(url) {
    
    }
    
}


export default HTTPUtil;
