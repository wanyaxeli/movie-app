import React,{useEffect,useState,useContext} from 'react'
import { video } from '../../components/movieContainer/MovieContainer'
import { myContext } from '../../App'
const PlayPage = ()=>{
    const data = useContext(myContext)
    const[video,setVideo]=useState([])
    const handleSubmit = (id)=>{
    let idTopost=data.find(item=>{return item.id===id})
    }
    useEffect(()=>{
    let myvideo = JSON.parse(window.localStorage.getItem('video'))
    if(myvideo){
       setVideo([myvideo])
    }
    },[])
    useEffect(()=>{
        let mymovie = JSON.parse(window.localStorage.getItem('movie'))
        if(mymovie){
           setVideo([mymovie])
        }
        },[])
        useEffect(()=>{
            let mylist = JSON.parse(window.localStorage.getItem('movielist'))
            if(mylist){
               setVideo([mylist])
            }
            },[])
    console.log(video)
    return(
        <div className='movie-display-container'>
            <div className='display-movie'>
                {video.map(movie=>{return(
                   <section className='vid-wrapper' key={movie.id}>
                     <div className='vid'><video controls  src={movie.url}></video></div>
                        <div className='play-movie-details-wrapper'>
                            <div className='play-details-wrapper'>
                                <div className='play-details'>
                                        <h2>{movie.name}</h2>
                                        <div className='movie-des'>
                                            <p className='hd'>HD</p>
                                            <p>rating:{movie.rating}</p>
                                            <p>{movie.genre}</p>
                                            <p>{movie.country}</p>
                                        </div>
                                        <p className='des movie-des'>{movie.description}</p>  
                                        <p className='des movie-des'>Casts : {movie.actors}</p>      
                                </div>
                                <div className='image-container'>
                                    <img src={movie.image}/>
                                </div>
                            </div>
                            <div className='comment-wrapper' >
                                <h3>Leave a comment</h3>
                                <form>
                                    <input type='text' placeholder='Name'/><br/>
                                    <textarea rows="4" cols="30" placeholder='Type a comment here'></textarea><br/>
                                    <button type='submit'>Comment</button>
                                </form>
                                <div>
                                    <p>eli</p>
                                    <p>worst movie ever</p>
                                </div>
                            </div>
                        </div>
                   </section>
                )})}
            </div>
        </div>
    )
}
export default PlayPage