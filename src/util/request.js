import Axios from "axios";

const instance = Axios.create({
    baseURL: '/api',
    timeout: 3000,
    withCredentials: true, // default
});

//请求拦截
instance.interceptors.request.use(config => {
    // var token = localStorage.getItem('token');
    // if (token) {
    //     config.headers.token = token
    // }
    return config
},err => {
    return Promise.reject(err)
})


//响应拦截
instance.interceptors.response.use(res => {
    if (res.data && res.data.code !== 200) {
        alert(res.data.msg)
    }else {
        return res.data
    }
},err => {
    return Promise.reject(err)
})


export  default  instance;