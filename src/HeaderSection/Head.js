import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Home from '../Img/HOME2.jpg'
import { FaShoppingCart } from 'react-icons/fa';
import Bennar from '../ProductSection/Bennar';
import { RiAdminFill } from 'react-icons/ri';
import { useContext } from 'react';
import { Data } from '../App';


function Head() {
  const navigate = useNavigate()
  const {loging}=useContext(Data);
  

  return (
    <Navbar expand="lg" className="bg-white">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Home} alt="Home pet" style={{ height: "100px", width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link to="/Main" className="nav-link" style={{ textDecoration: "none", fontSize: "22px", fontWeight: "bold" }}>Home</Link>
            <Link to="dog" className="nav-link" style={{ textDecoration: "none", fontSize: "22px", fontWeight: "bold" }}>Dog</Link>
            <Link to="Cat" className="nav-link" style={{ textDecoration: "none", fontSize: "22px", fontWeight: "bold" }}>Cat</Link>
            <Link to="/All Catgeroy" className="nav-link" style={{ textDecoration: "none", fontSize: "22px", fontWeight: "bold" }}>All Category</Link>
          </Nav>

         {loging ? (
     <Nav.Link
     className="nav-link"
     style={{
      textDecoration: "none",
      fontSize: "22px",
      fontWeight: "bold",
      color: "black",
      margin: "20px"
    }}
    onClick={()=>{
         navigate("/Login")
        }}
    
  >
    Logout
  </Nav.Link>
) : (
          <Nav.Link
            className="nav-link"
            style={{ textDecoration: "none", fontSize: "22px", fontWeight: "bold", color: "black", margin: "13px" }}
            onClick={()=>{
         navigate("/Login")
        }}
   
             >
            Login
          </Nav.Link>
        )}
         
          <FaShoppingCart onClick={() => navigate("/cart")} style={{ cursor: "pointer", fontSize: "30px", margin: "0 10px" }} />
          <RiAdminFill onClick={() => navigate("/Admin")} style={{ cursor: "pointer", fontSize: "30px", margin: "0 10px" }} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;