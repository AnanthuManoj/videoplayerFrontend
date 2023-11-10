import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>

     <div className='d-flex justify-content-evenly align-items-center w-100'>
       <div className="websites" style={{width:'400px'}}>
          <h3 className='mb-3' style={{color:'#00A9FF',fontSize:'30px'}}> <i class="fa-solid fa-circle-play me-3"></i>
          WX player</h3>

          <h6>
          Step into the future of entertainment with WX player —where your viewing experience becomes an event! Our sleek and intuitive video player is your ticket to a world of high-definition bliss. Picture this: a universe where your playlists are as unique as your fingerprint, streaming seamlessly on any device you fancy. No more endless buffering—just pure, uninterrupted joy. 
          </h6>
       </div>
       <div className="links d-flex flex-column">
        <h4 className='mb-3'style={{color:'#00A9FF'}}>Link</h4>
        <Link to={'/'} style={{textDecoration:'none'}}>Landing page</Link>
        <Link to={'/home'}style={{textDecoration:'none'}}>Home page</Link>
        <Link to={'/watch-history'}style={{textDecoration:'none'}}>Watchhistory</Link>
        
       </div>
       <div className="guides d-flex flex-column">
        <h4 className='mb-3' style={{color:'#00A9FF'}}>Guides</h4>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none'}}>React</Link>
        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>React Bootstrap</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none'}}>Bootsrtap</Link>
       </div>

       <div className="contacts d-flex flex-column">
       <h4 className='mb-3'style={{color:'#00A9FF'}}>Contacts</h4>
        <div className='d-flex mb-2'>
          <input type="text" className='form-control' placeholder='Enter Your Email Id' />
          <button className='btn btn-info ms-2'>Subscribe</button>
        </div>

        <div className='d-flex justify-content-evenly align-item-center'>
           <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
           <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
           <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
           <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
        </div>

       </div>
     </div>
     <p className='mt-5 '>
      copyright© 2023 WX Player, Inc. All rights reserved ®.
     </p>

    </div>
  )
}

export default Footer