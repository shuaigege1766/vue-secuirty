import Axios from "axios";

const instance = Axios.create({
    baseURL: '/api',
    timeout: 3000,
    withCredentials: true, // default
});

//请求拦截
instance.interceptors.request.use(config => {
    return config
},err => {
    return Promise.reject(err)
})


//响应拦截
instance.interceptors.response.use(res => {
    console.log(res)
    // if (res.code && res.code !== 200) {
    //     //返回不等于200
    //     alert(res.message)
    // }
    return res
},err => {
    return Promise.reject(err)
})


export  default  instance;