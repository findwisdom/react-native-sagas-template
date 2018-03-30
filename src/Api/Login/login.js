import {call, put} from 'redux-saga/effects'
import site from '../../Common/site-config'
// import {Toast} from 'antd-mobile';
import {AsyncStorage} from 'react-native';

let loginUrl = site.loginUrl + 'identity/connect/token'
let getUserUrl = site.loginUrl + 'identity/connect/userinfo'

export function login(username, password) {
    let requestHeader = new Request(loginUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/x-www-form-urlencoded',
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `username=${username}&password=${password}&client_id=${site.clientId}&grant_type=password&client_secret=s${site.clientSecret}&scope=${site.scope}`
    })
    return fetch(requestHeader).then(resp => {
        return resp.json()
    }).then(function (data) {
        AsyncStorage.setItem('USER', JSON.stringify(data))
        return data
    }).catch(function (err) {
        console.log(err)
    })
}

// getUserInfo = async () => {
//     return await http.get(getUserUrl)
// }

// module.exports = {
//     login,
//     getUserInfo,
// }
