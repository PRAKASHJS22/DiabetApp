import axios from 'axios'
import store from '../../store'
const BASE_URL='http://13.235.81.249:4002'

const request=async(options,isHeader=true)=>{
    return new Promise((resolve,reject)=>{
        let authHeader=null
        if(isHeader){
            authHeader=store.store.getState().authReducer.token
        }
    console.log(store.store.getState().authReducer.token,"")
      const client=axios.create({
          baseURL:BASE_URL,
          headers:{
              'x-access-token':authHeader
          }
      })
      const onError=(error)=>{
          if(error.response) {
              console.log(error.response)
              alert(error.response.data.message)
          }
          reject(error)
      }

      return client(options)
       .then(res=>resolve(res))
       .catch(onError)
 
    })
}

export default request