/**axios封装
  * 
  */
 import axios from 'axios';
 
 axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
 export function request(config) {
    return new Promise((resolve,reject)=>{
        const instance = axios.create({
            baseURL: 'http://192.168.0.103:3000',
            timeout: 5000
        })
        instance(config)
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
    })
 }