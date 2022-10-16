import React,{useEffect, useState} from 'react'
const Add = (props)=>{
    const[error,setError]=useState('')
    const[value,setValue]=useState({
       name:"",
       file:'' 
    })
    const handleChange=(e)=>{
        setValue(
            {
                [e.target.name]:e.target.value
            }
        )
    }
    function validate(){
     if(value.name.trim().length===0){
        setError('Name is empty')
        return false
     }else if(value.file===null){
        setError('Please apload a video')
     }
    }
    const handleSubmit = (e)=>{
    e.preventDefault()
    validate()
    }
    return(
        <section className={`add-container ${props.show.view}` }>
            <form>
               {error && <p style={{color:'red',padding:0}}>{error}</p>}
              <label htmlFor='name'>Name:</label> <br/>  
              <input id='name' name='name' onChange={handleChange} type='text' placeholder="Movie name"/><br/>
              <label htmlFor='file'>File path:</label>
              <input id='file' name='file' onChange={handleChange} type="file" accept='.mp4'></input><br/>
              <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}
export default Add
