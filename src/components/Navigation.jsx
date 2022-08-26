/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Log from './pics-of-components/Log';
import style from './pics-of-components/styles/NavbarDropCust.module.css';
//  import icons
 import {AiFillHome} from "react-icons/ai";
 import {TbInfoCircle} from 'react-icons/tb';
 import {FaShoppingCart} from 'react-icons/fa';
 import {BsTelephoneOutboundFill} from 'react-icons/bs';

import { Link} from 'react-router-dom';
//AiOutlineHome
//  short code 
 
function Navigation() {
  return (
    <div>
    <Navbar bg="light" expand="lg" className={style.MainNav}>
      <Container>
       <Log />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={style.mainNAvWrapper}>
          <Nav className="me-auto">
            {/*  Top side navigative links -- top corner */}
          
            
             <Link to={'/home'} className={style.ToBarNavigating}>
             Home
             <AiFillHome className={style.NavigativeIcon}/> 
             </Link>
            

             <Link to={'/about'}  className={style.ToBarNavigating}>
              About
             <TbInfoCircle className={style.NavigativeIcon}/> 
             </Link>
              
                         <Link to={'/product'} className={style.ToBarNavigating}>
             Product
             <FaShoppingCart className={style.NavigativeIcon}/> 
             </Link>
              

             <Link to={'/contact'} className={style.ToBarNavigating}>
            Contact
             <BsTelephoneOutboundFill className={style.NavigativeIcon}/> 
             </Link>
              
            
              
          
        {/*  drop down component  */}
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;