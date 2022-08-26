import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
  import style from '../pics-of-components/styles/Logo.module.css';
 import {FaAngleDoubleUp} from 'react-icons/fa';


const Log = () => {
  return (
    <div>
          <FaAngleDoubleUp className={style.topIcon}/>     <Navbar.Brand   className={style.LogoOfBrand}>
      <span className={style.R}>R</span>okeya <span className={style.B}>B</span>eding
         
               </Navbar.Brand>

                
    </div>
  )
}

export default Log