import React,{useEffect,useState,useContext} from 'react'
import { myContext } from '../../App'
const List = ()=>{
    const items = useContext(myContext)
    const[list,setList]=useState([])
    const[mylist,setMylist]=useState([])
    console.log(mylist)
    const handleList =(id)=>{
     let item = items.find(i=>{return i.id===id})
     setMylist(item)
     if (item){
        window.location.href='/play'
     }
     window.localStorage.removeItem('movie')
     window.localStorage.removeItem('video')
    }
    useEffect(()=>{
      let list =JSON.parse( window.localStorage.getItem("list")  )
      if(list){
      setList(list)
      }
    },[list])
    useEffect(()=>{
        window.localStorage.setItem('movielist',JSON.stringify(mylist))
      },[mylist])
    return(
        <div className='movie-container'>
        {list.map(data=>{
            return(
            <div key={data.id} className='movie-card'>
                <div className='image-card'>
                    <img  src={data.image}></img>
                    <div className='player-dis'>
                        <button onClick={()=>handleList(data.id)}>play</button>
                    </div>
                    <div className='name-card'>
                        <p>{data.name}</p>
                    </div>
                </div>
        </div>
            )
        })}
    </div>
    )
}
export default List