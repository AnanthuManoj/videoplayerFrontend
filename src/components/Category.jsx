import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addToCategory, deleteCategory, deleteCategoryVideo, getAllCategory, getVideoId, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Category() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const [categoryName , setCatogeryName] = useState('')

  const [category,setCatogery]=useState([])

  const handleAddChange = async ()=>{
     console.log(categoryName);
     if(categoryName){
       let body ={
        categoryName,
        allVideos:[]
       }
       const response = await addToCategory(body)
       console.log(response);
       if(response.status>=200 && response.status<300){
        toast.info('catogory added successfully')
        setCatogeryName('')
        handleClose()
        allCategory()
       }else{
        toast.warn('something went wrong')
       }

     }else{
      toast.warn('please enter a category')
     }
  }

  const allCategory = async ()=>{
    const {data} = await getAllCategory()
    setCatogery(data)
  }

  console.log(category);

  useEffect(()=>{
    allCategory()
  },[])

  const deleteAllCategory=async(id)=>{
     await deleteCategory(id)
     allCategory()
  }

  const dragOver =(e)=>{
    e.preventDefault()
  }

  const videoDrop =(e,id)=>{
    console.log(id);
    let videoId = e.dataTransfer.getData('videoId')
    console.log(videoId);
    getID(videoId,id)

   
  }


  // to get video details by id
  const getID = async(videoId,id) =>{
   const {data} =  await getVideoId(videoId)

   let selectedCategory = category.find((item)=> item?.id == id)
   console.log(selectedCategory);
   selectedCategory.allVideos.push(data)


   await updateCategory(id,selectedCategory)
     allCategory()
  }
  
  const removeVideo = async (card)=>{
    const  id = card.id
     category.map(async (item)=>{
     
     let index =  item.allVideos.indexOf(card)
      item.allVideos.splice(index, 1)
      await updateCategory(id, item.allVideos)
     })
    
  }


  return (
    <div>
      <div>
          <button className='btn btn-info py-2 px-5' onClick={handleShow}>Add New Category</button>
      </div>

     { category?.length>0 ?
     category?.map((item)=>(
      <div className='m-5 border border-secondary p-3 rounded' droppable onDragOver={(e)=>{dragOver(e)}} onDrop={(e)=>videoDrop(e,item?.id)}>
      <div className="d-flex justify-content-between align-items-center">
          <h4>{item.categoryName}</h4>
          <Button onClick={()=>{deleteAllCategory(item?.id)}} variant="primary"><i class="fa-solid fa-trash"></i></Button>

        </div>

        <Row>
          <Col>
          {
            item?.allVideos.length>0?
            item?.allVideos.map((card)=>(
              <Card style={{ width: "100%" }} className='mt-3'>
              <Card.Img onClick={handleShow} variant="top" height={'250px'} src={card.url}/>
              <Card.Body className='d-flex justify-content-evenly '>
                  <Card.Title><h6>{card.caption}</h6></Card.Title>
                  <Button onClick={()=>{removeVideo(card)}} variant="primary"><i class="fa-solid fa-trash"></i></Button>
              </Card.Body>
            </Card>
            ))
           :<p>nothing to display</p>
          }
          </Col>
        </Row>
        </div>
     ))
     : <p>nothing to display</p>
      }

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{color:"#00A9FF"}}>{' '}category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please fill the form</p>
        <form >

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text"  placeholder="Enter category Name" onChange={(e)=>{setCatogeryName(e.target.value)}} />
           </Form.Group>

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary"  onClick={handleAddChange}>
          Add Category
        </Button>
      </Modal.Footer>
    </Modal>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </div>
  )
}

export default Category

