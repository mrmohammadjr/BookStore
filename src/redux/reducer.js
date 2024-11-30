export const allData = (state = {data:[] ,error:"", loading:false}, { type,payload })=>{
  if(type === "loading"){
    return payload;
  }
  if(type === "success"){
    return payload;
  }
  if(type === "error"){
    return payload;
  }
  if(type === "oneData"){
    return payload;
  }
  return state;
}
export const oneData = (state = {data:[] ,error:"", loading:false}, { type,payload })=>{
  if(type === "loading"){
    return payload;
  }
  if(type === "success"){
    return payload;
  }
  if(type === "error"){
    return payload;
  }
  if(type === "oneData"){
    return payload;
  }
  return state;
}
export const getUser = (state = { info : "" , checkLogin : false, details:[] }, { type,payload })=>{
  if(type === "LOGIN_REQUEST"){
    return payload;
  }
  if(type === "LOGIN_SUCCESS"){
    return payload;
  }
  if(type === "LOGIN_FAILURE"){
    return payload;
  }
  return state;
}
export const addUser = (state = {flag:false}, { type,payload })=>{
  if(type === "bool"){
    return payload;
  }
  return state;
}
export const cartItems = (state = {data:[]}, { type,payload })=>{
  if(type === "loadingCart"){
    return payload;
  }
  if(type === "successCart"){
    return payload;
  }
  if(type === "failedCart"){
    return payload;
  }
  return state;
}
export const getAuthors = (state = {authors:[]}, { type,payload })=>{
  if(type === "loading"){
    return payload;
  }
  if(type === "success"){
    return payload;
  }
  if(type === "failed"){
    return payload;
  }
  return state
}