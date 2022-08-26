import React from 'react'
import Smartp from '../components/SmartCloth';
import classes from '../styles/pages.module.css';

const Smart = () => {
  return (
    <div>
         <main className={classes.main}>
   <div className={classes.container}>
    <Smartp  /> 
    </div>
     </main>
     </div>
  )
}

export default Smart;