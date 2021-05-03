import './navbar.css'
import React, {useEffect, useState} from 'react'
export const Navbar = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener( "scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true)
            }else {
                handleShow(false)
            }
        })
    }, [])

    return (
        <div className={`navbar ${(show) ? "nav_black" :  ""}`} style={{padding:"10px"}}>
            <img className="netflix-logo"  alt="netflix-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />  
            <img className="user-logo"  alt="user-logo" src="https://img.icons8.com/officel/80/000000/login-as-user.png" />  
        </div>
    )
}

export default Navbar
