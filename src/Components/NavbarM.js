// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
 
// export default function NavbarM() {
//     return (
//       <div>
//          <Navbar className="fixed-top" bg="dark" expand="lg navbar-dark" >
//       <Container>
//         <Navbar.Brand href="/">News Monkey</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/Business">Business</Nav.Link>
//             <Nav.Link href="/General">General</Nav.Link>
//             <Nav.Link href="/Health">Health</Nav.Link>
//             <Nav.Link href="/Science">Science</Nav.Link>
//             <Nav.Link href="/Sports">Sports</Nav.Link>
//             <Nav.Link href="/Technology ">Technology</Nav.Link>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//       </div>
//     )
  
// }

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarM = () => {

    return (
        <div>
         <Navbar className="fixed-top" bg="dark" expand="lg navbar-dark" >
      <Container>
        <Navbar.Brand href="/">News Monkey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Business">Business</Nav.Link>
            <Nav.Link href="/General">General</Nav.Link>
            <Nav.Link href="/Health">Health</Nav.Link>
            <Nav.Link href="/Science">Science</Nav.Link>
            <Nav.Link href="/Sports">Sports</Nav.Link>
            <Nav.Link href="/Technology ">Technology</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )

}

export default NavBarM

