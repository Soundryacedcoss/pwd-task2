import React from 'react'
import img1 from './image/Screenshot_2022-11-11_14-18-26.png'
// import img2 from './image/Screenshot_2022-11-11_15-08-08.png'
export const MidPage = () => {
  return (
    <div className='MidPage'>
        <div className='flex'>
            <div className='row1-col1'>
                <p>THE FUTURE IS NOW</p>
                <h2>The world's Fastest BlockChain</h2>
                <p>TERNO provides the only scalable and decentralized blockchain frame work copable of over 1 million transactions per second</p>
                <button className='button'>Received Email Updates</button>
            </div>
            <div>
                <img className='row1-Col2' src={img1} alt="" />
            </div>
        </div>
        
    </div>
  )
}
