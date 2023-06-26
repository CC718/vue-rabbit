import httpInstance from "@/utils/http.js";
//获取banner
export function getBannerAPI() {
   return httpInstance({
      url: '/home/banner'
   })
}
//获取新鲜好物
export function findNewAPI() {
   return httpInstance({
      url: '/home/new'
   })
}
export function getHotAPI() {
   return httpInstance({
      url: '/home/hot'
   })
}
export const getGoodsAPI = () => {
   return httpInstance({
     url: '/home/goods'
   })
 }