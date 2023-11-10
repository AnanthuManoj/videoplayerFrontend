import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'
import Button from 'react-bootstrap/Button';


function Watchhistory() {

  const [history , setHistory] = useState([])

  const watchAllHistory = async ()=>{
      const {data} = await getAllHistory()
      setHistory(data)
  }

  console.log(history);
  
  useEffect(()=>{
    watchAllHistory();
  },[])


 const removeHistory = async(id) =>{
      await deleteHistory(id)
      watchAllHistory()
 }

  return (
    <div>
      <div className='container mt-5 d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'} style={{textDecoration:'none',fontSize:"20px"}}><i class="fa-solid fa-arrow-left-long"></i>Back to Home</Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
         <tr>
            <th>#</th>
            <th>caption</th>
            <th>url</th>
            <th>Time</th>
            <th>Action</th>
         </tr>
        </thead>
        <tbody>
          {history?.length>0?
            history.map((item)=>(
              <tr>
              <td>{item.id}</td>
              <td>{item.caption}</td>
              <td><a href={item.youTubeLink} target='_blank'>{item.youTubeLink}</a></td>
              <td>{item.timeFormat}</td>
              <td>
                <Button onClick={()=>{removeHistory(item?.id)}} variant="primary"><i class="fa-solid fa-trash"></i></Button>
              </td>
            </tr>
            ))
           :
           <p>nothing to display</p>}
        </tbody>
      </table>
    </div>
  )
}

export default Watchhistory