import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 8000, //报请求超时
});

//商家详情
export function storeList() {
  return instance.get('/api/seller')
}
//评论
export function ratings() {
  return instance.get('/api/ratings')
}
//商品接口
export function goods() {
  return instance.get('/api/goods')
}