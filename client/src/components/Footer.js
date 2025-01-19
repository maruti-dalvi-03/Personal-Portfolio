import React from 'react'



const Footer = () => {
  return (
    <div className='footer' style={{backgroundColor:"black", color:"whitesmoke", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
      <div className='left-footer' style={{fontSize:"30px", fontWeight:"700"}}>
MyPortfolio
      </div>
      <div className='mid-footer'></div>
Thanks for Visit My Portfolio.
      <div className='right-footer'>
   <a href='/dashboard'>dashboard</a>

      </div>
    </div>
  )
}

export default Footer