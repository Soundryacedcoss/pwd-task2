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
                <li>How it works</li>
                <li>Roads Map</li>
                <li>Whitepaper</li>
                <li>Contact</li>
                <li>Advertising</li>
                <li><button className='Button'>Dashboard Login</button></li>
            </ul>
        </div>
    </div>
  )
}
