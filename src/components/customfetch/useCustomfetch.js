import React,{useEffect,useState} from 'react'
const useCustomfetch= (url,)=>{
    const[data,setData]=useState([])
    useEffect(()=>{
   fetch(url,{method:'get'})
   .then(res=>res.json())
   .then(data=>{
    setData(data)
   })
    },[url])
    return  [data]
}
export default useCustomfetch