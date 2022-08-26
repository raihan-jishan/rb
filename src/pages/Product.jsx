import React from 'react'
import classes from '../styles/product.module.css';
import Productcom from '../components/Product';
const Product = () => {
  return (
 <div>
   <main className={classes.main}>
   <div className={classes.container}>
    <Productcom />
      </div>
   </main>
 </div>
  )
}

export default Product