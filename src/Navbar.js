import React from 'react'
import img1 from './image/Screenshot_2022-11-11_13-52-06.png'
export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Logo'>
        <img className='LogoIm' src={img1} alt="" />
        </div>
        <div className='Links'>
            <ul>
                <li><button className='Button'><a href="#">How it works</a> </button></li>
                <li><button className='Button'><a href="#">Roads Map</a></button></li>
                <li><button className='Button'><a href="#">Whitepaper</a></button></li>
                <li><button className='Button button1'><a href="#">Contact</a></button></li>
                <li><button className='Button'><a href="#">Advertising</a></button></li>
                <li><button className='Button'><a href="#">Dashboard Login</a></button></li>
            </ul>
        </div>
    </div>
  )
}
