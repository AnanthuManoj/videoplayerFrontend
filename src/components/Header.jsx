import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:'none',color:'#00A9FF',fontSize:'30px'}}>
       <i class="fa-solid fa-circle-play"></i>{' '}
         WX player
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header