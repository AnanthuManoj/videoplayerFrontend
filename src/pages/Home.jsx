import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {

  const [uploadVideoStatus,setUploadVideoStatus]=useState({}) 

  return (
    <div className='container'>
      <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
          <div className='add-videos'>
            <Add setUpload={setUploadVideoStatus}/>
          </div>
          <Link to={'/watch-history'}style={{textDecoration:'none',font:'30px'}}>Watch History</Link>
      </div>

      <div className='container-fludid w-100 mt-5 mb-5 d-flex justify-content-between'>
           <div className='all-videos col-lg-9'>
              <h4 className='mb-5'>All Videos</h4>
              <View uploadVideo={uploadVideoStatus}/>
           </div>
           <div className='category col-lg-3'>
             <Category/>
           </div>
      </div>
    </div>
  )
}

export default Home