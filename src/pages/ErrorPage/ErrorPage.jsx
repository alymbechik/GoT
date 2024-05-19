import React from 'react'
import logo from '../../assets/8781_logo.webp'
import './style.css'

const ErrorPage = () => {

  return (
    <div>
        <div className='error'>
            <img src={logo} alt="" />
           <h1>Страница не найдена</h1> 
        </div>
    </div>
  )
}

export default ErrorPage