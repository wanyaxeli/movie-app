import React,{useState,useEffect} from 'react'
import Add from '../add/Add'
const MovieContainer = ({videos})=>{
const [data,setData]= useState([])
const [show,setShow]= useState({
    view:''
})
const handleShow= ()=>{
  if(show.view===""){
    setShow({
        view:'show'
    })
  }else{
    setShow({
        view:''
    })
  }
}
const handlevideo=(id)=>{
let myvideo=videos.find(item=>{  return  item.id===id})
setData(myvideo)
if(data){
    window.location.href='/play'
}
window.localStorage.removeItem('movie')
window.localStorage.removeItem('movielist')
}
useEffect(()=>{
    window.localStorage.setItem("video",JSON.stringify(data))
},[data])
    return(
        <div className='movie-container'>
            {videos.map(data=>{
                return(
                <div key={data.id} className='movie-card'>
                    <div className='image-card'>
                        <img  src={data.image}></img>
                        <div className='player-dis'>
                            <button  onClick={()=>handlevideo(data.id)} >play</button>
                        </div>
                        <div className='name-card'>
                            <p>{data.name}</p>
                        </div>
                    </div>
            </div>
                )
            })}
            <div className='movie-card'>
                <div className='add-wrapper image-card'>
                        <button className='add-btn' onClick={handleShow}>add</button>
                </div>
                <Add show={show}/>
            </div>
        </div>
    )
}
export default MovieContainer