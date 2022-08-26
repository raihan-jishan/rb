import React from 'react';
import style from '../styles/home.module.css';
import Gopage from '../components/pics-of-components/Buttons/GOpage';
import About from './About';
const Home = () => {
  return (
     <>
    <section className={style.home} id='Home'>
    <div className={style.content}>
      <h3 className={style.title}>Best Decorative shop </h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, qui?</p>
    <Gopage /> 
    </div>
    </section>
    <About /> 

    </>
   
    
        
  )
}

export default Home;