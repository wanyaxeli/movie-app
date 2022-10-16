import React,{useContext,useState,useEffect} from 'react'
import { createRoutesFromChildren } from 'react-router-dom'
import { myContext } from '../../App'
import MovieContainer from '../../components/movieContainer/MovieContainer'
const Home = ()=>{
    const data = useContext(myContext)
    let mappedData= data.map(item=> item.image)
    let mappedrate= data.map(item=> item.rating)
    let mappedDes= data.map(item=> item.description)
    let mappedName= data.map(item=> item.name)
    let mappedGenre= data.map(item=> item.genre)
    let mappedId= data.map(item=> item.id)
    const [index,setIndex]=useState(0)
    const [list,setList]=useState('')
    const [movie,setMovie]=useState([])
    function autorun() {
        if(index===mappedData.length - 1){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }
    const handleActive = (position)=>{
        setIndex(position)
    }
    const handleList = (id)=>{
          let item= data.find(item=>{return item.id===id})
          setList(prelist=>[...prelist,item])
    }
    const handleWatch = (id)=>{
    let video = data.find(item=>{return item.id===id})
    setMovie(video)
    if(movie){
        window.location.href='/play'
    }
    window.localStorage.removeItem('movielist')
    window.localStorage.removeItem('video')
    }
    useEffect(()=>{
     const handleAutorun = setTimeout(autorun,5000)
     return ()=>{
        setTimeout(handleAutorun)
     }
    },[index])
    useEffect(()=>{
     window.localStorage.setItem("list",JSON.stringify(list))
    },[list])
    useEffect(()=>{
        window.localStorage.setItem("movie",JSON.stringify(movie))
       },[movie])
    return(
    <section>    
        <div className='banner'>
            <img src={mappedData[index]}/>
            <div className='banner-cover'>
                <div className='banner-details-wrapper'>
                  <div className='details-wrapper'>
                        <h2>{mappedName[index]}</h2>
                            <div className='movie-des'>
                                <p className='hd'>HD</p>
                                <p>rating:{mappedrate[index]}</p>
                                <p>{mappedGenre[index]}</p>
                            </div>
                            <p className='des'>{mappedDes[index]}</p>
                            <div className='btn-holder'>
                                <button onClick={()=>handleWatch(mappedId[index])} className='btn-play'>Watch now</button>
                                <button onClick={()=>handleList(mappedId[index])}>Add to list</button>
                            </div>
                  </div>
                </div>
                <div className='circ-container'>
                    {
                        data.map((item,i)=>{
                            return(
                                <div className={`circ ${i===index?"circ-active":""}`} key={item.id} onClick={()=>handleActive(i)}></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>    
       <section className='item-wrapper'>
          <MovieContainer videos={data}/>
       </section>
    </section>
    )
}
export default Home