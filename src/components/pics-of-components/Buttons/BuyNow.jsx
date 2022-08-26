import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const BuyNow = () => {
  return (
    <>
         <div>
        <button type="button" className={classes.button}>
          <Link to={'/product'} className='Link'>
    <div className={classes.buttonText}>Show all collection</div>
    </Link>
    <div className={classes.buttonIcon}>  </div>
  </button>
 
    </div>
    </>
  )
}

export default BuyNow;