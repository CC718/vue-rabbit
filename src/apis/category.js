import httpInstance from '@/utils/http.js'
export function getCategoryAPI(id) {
   return httpInstance({
      url:'/category',
      params:{
         id
      }
   })
}