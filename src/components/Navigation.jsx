import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaBirthdayCake} from 'react-icons/fa'

const Navigation = () => {
  return (
    <Navbar  variant='dark' expand="md">
      <Container fluid>
        <Link to='/' style={{textDecoration: 'none', fontSize: '2rem'}} className='cake-wrapper' ><FaBirthdayCake className='cake'/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation