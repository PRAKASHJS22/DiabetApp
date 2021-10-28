import request from "./apiManager";

const createAccount=(data)=>{
  return request(
    {
        method:'post',
        url:'/user/register',
        data:data
    }
  )
}

const loginAccount=(data)=>{
    return request(
      {
          method:'post',
          url:'/user/login',
          data:data
      }
    )
  }

const verifyAccount=(data)=>{
    return request(
      {
          method:'post',
          url:'/user/verify-otp',
          data:data
      }
    )
  }

  const verifyOtp=(data)=>{
    return request(
      {
          method:'post',
          url:'/user/verify-otp',
          data:data
      }
    )
  }

  const regComplete=()=>{
    return request(
      {
          method:'put',
          url:'/user/register/complete',
      },
      true
    )
    
  }


  const getPlan=()=>{
    return request(
      {
          method:'get',
          url:'/user/plans',
      },
      true
    )
  }


  const getPlanDetail=(id)=>{
    return request(
      {
          method:'get',
          url:`/user/plan/${id}`,
      },
      true
    )
  }


export default{
    createAccount,
    loginAccount,
    verifyAccount,
    verifyOtp,
    regComplete,
    getPlan,
    getPlanDetail
}


