import request from "../util/request"

export const loginRequest=(data)=>{
    return request({
        url: "/login",
        method: "post",
        data,
    })
}