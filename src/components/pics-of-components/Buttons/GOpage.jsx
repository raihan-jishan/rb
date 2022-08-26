import React from 'react'
import classes from './Button.module.css';
import {IoArrowForwardOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const GOpage = () => {
  return (
 
     <div>
        <button type="button" className={classes.button}>
          <Link to={'/product'} className='Link'>
    <div className={classes.buttonText}>Go product page</div>
    </Link>
    <div className={classes.buttonIcon}><IoArrowForwardOutline />  </div>
  </button>
 
    </div>
    
  )
}

export default GOpage