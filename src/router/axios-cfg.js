import axios from 'axios'
import qs from 'qs'
import sf from 'string-format'

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:8085/',
	timeout: 3000,
	headers: {'Access-Control-Allow-Origin':'*','Content-Type': 'application/json'}
})

//（添加请求拦截器）
axiosInstance.interceptors.request.use((config)=>{
	return config
},(error)=>{
	console.log('错误的传参')
	return Promise.reject(error)
})
//返回状态判断（添加响应拦截器）
axiosInstance.interceptors.response.use((res)=>{
	if(res.data.success){
		return Promise.resolve(res.data)
	}
	return res.data
},(error)=>{
	console.log('网络异常')
	return Promise.reject(error)
})

export const get = (url,params,pathVariable=null) =>  axiosInstance.get(sf(url, pathVariable), params)
export const post = (url,params,pathVariable=null) => axiosInstance.post(sf(url, pathVariable), params)