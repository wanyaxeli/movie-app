import React from 'react'
import { useLocation,Link } from 'react-router-dom'
const Nav =()=>{
    const location = useLocation()
    const {pathname}=location
    const splitpath=pathname.split('/')
return(
    <header>
        <div className='nav-container'>
            <div className='logo'>
                 <img height='40px' width='160px' src='/images/fmovies.png'></img>
            </div>
            <nav>
                <ul>
                    <li className={splitpath[1]===""?"active":""}><Link to='/'>home</Link></li>
                    <li  className={splitpath[1]==="genre"?"active":""}><Link to='genre'>Genre</Link></li>
                    <li  className={splitpath[1]==="country"?"active":""}><Link to='country'>country</Link></li>
                    <li  className={splitpath[1]==="list"?"active":""}><Link to='list'>List</Link></li>
                </ul>
            </nav>
            <div className='search-container'> 
               <input type='search' placeholder='Search movies'/>
            </div>
        </div>
    </header>
)
}
export default Nav