import React from 'react'
import "../Styles/StylesLogo.css"
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
    <Link to={"/"}><img  className="Logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuM3jpfDIoYsf07L6N4d81UKR21gRnoB5STg&s'></img></Link>
    </div>
  )
}

export default Logo
