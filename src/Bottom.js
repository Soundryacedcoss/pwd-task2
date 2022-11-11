import React from 'react'
import img1 from './image/Screenshot_2022-11-11_15-47-07 (1).png'
import img2 from './image/Screenshot_2022-11-11_15-58-48.png'
export const Bottom = () => {
  return (
    <div>
        <img src={img2} alt="" />
        <p className='BottomHead'>ONE BLOCK AT A TIME</p>
    <div className='BottomPage'>
        <h2 className='color'>One Blockchain To Meet All Needs </h2>
        <p className='row2'>Decentralized, Scalable, Secure, and Flexible Lexicon Dek-a-kon]: The total inventory or record set of meaningful units</p>
    </div>
    <div className='Bottom-row2'>
        <div >
            <img className='image' src={img1} alt="" />
            <h3>100% Decentralized</h3>
            <p>Lexicon has the flexibility to be able to run within both a permissioned and open environment based on the use-case</p>
        </div>
        <div>
        <img className='image' src={img1} alt="" />
            <h3>100% On-Chain</h3>
            <p>Our team has worked tirelessly to hold to the belief that on-chain decentralization is critical to the future of blockchain</p>
        </div>
        <div>
        <img className='image' src={img1} alt="" />
            <h3>100% Verified</h3>
            <p>Due to the competitive nature of blockchain technology and the revolution ary proprietary code that has been</p>
            
        </div>
    </div>
    </div>
  )
}
