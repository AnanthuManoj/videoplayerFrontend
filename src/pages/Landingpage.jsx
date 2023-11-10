import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <Container className='mt-4'>
    <Row>
      <Col lg={6}>
        <h3 style={{color:'#00A9FF'}}>Welcome to WX Player</h3>
        <p className='mt-3' style={{textAlign:'justify'}}> where entertainment meets innovation in a symphony of pixels and play! Immerse yourself in a visual fiesta with our cutting-edge video player platform, boasting a sleek interface that dances with your fingertips. From jaw-dropping high-definition quality to playlists curated for your vibes, we're your backstage pass to a personalized binge-watch bonanza. Universal compatibility ensures the party never stops, seamlessly transitioning from your laptop to your pocket-sized screen. No more buffering blues; our player ensures a smooth serenade of your favorite shows. With powerful search tools and intelligent recommendations, discovering your next obsession is a thrill. </p>

        <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-outline-info mb-3'>Get Started{' '}<i class="fa-solid fa-arrow-right"></i></button>
      </Col>
      <Col lg={6}>
        <img src="https://img.freepik.com/free-vector/press-play-concept-illustration_114360-1364.jpg?w=740&t=st=1698770343~exp=1698770943~hmac=fa10011bd13aacf673c0c6617c6e4b5e33854be52b0895b7459b21984cac8a3c" style={{width:'500px'}}/>
      </Col>
    </Row>
   
   <div className='container mt-5 mb-5 d-flex justify-content-center align-item-center flex-column'>
    <h3 className='mb-5 text-center'>Features</h3>
    <div className='cards d-flex justify-content-evenly '>
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'300px'} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'300px'} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
   </div>


  <Container className='border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between'>
     <Row>
      <Col lg={6}>
       <h3>Simple fast and powerful</h3>
       <p><span className='fw-bolder fs-5'>play everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia omnis facilis, harum quisquam in eligendi, sequi ex modi illo quibusdam rerum perspiciatis labore! Esse perspiciatis itaque quaerat voluptatem assumenda?</p>

       <p><span className='fw-bolder fs-5'>play smoothly :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia omnis facilis, harum quisquam in eligendi, sequi ex modi illo quibusdam rerum perspiciatis labore! Esse perspiciatis itaque quaerat voluptatem assumenda?</p>

       <p><span className='fw-bolder fs-5'>play and enjoy :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia omnis facilis, harum quisquam in eligendi, sequi ex modi illo quibusdam rerum perspiciatis labore! Esse perspiciatis itaque quaerat voluptatem assumenda?</p>
      </Col>
      <Col lg={6}>
      <iframe width="100%" height="400px" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Col>
     </Row>
  </Container>

  </Container>
  
  )
}

export default Landingpage