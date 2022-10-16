import React,{useEffect,useState} from 'react'
function useDebounce (value,delay){
    const [devalue,setValue]=useState(value)
    useEffect(()=>{
        const handleDeounce=setTimeout(()=>setValue(value),delay)
        return ()=>{
            clearTimeout (handleDeounce)
        }
    },[value,delay])
    return devalue  
}
export default useDebounce