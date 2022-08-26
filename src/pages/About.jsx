import React from 'react'
import classes from '../styles/about.module.css';
import aboutImage from '../assets/img (17).jpg';
import { HiLocationMarker } from 'react-icons/hi';
import {BsFillTelephoneFill,BsInfoCircle} from 'react-icons/bs';
// import Gopage from '../components/pics-of-components/Buttons/GOpage';
const About = () => {
  return (
    // About section 
   <div id='About' className={classes.About}>
   <div className={classes.titleText}>
    <h2><s className={classes.A}>A</s>bout <s className={classes.U}>U</s>s</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

   </div>

    <div className={classes.AboutImage}>
      <div className={classes.About}>
        <h1><s className={classes.A}>Ro</s>keya Beding store & foam..</h1>
        <p><HiLocationMarker/><a href="https://goo.gl/maps/PUcoT7LHxXddRB9k6" className={classes.a}>location: laksham, front of laksham.thana. Near of MR gallery. laksham-cumilla </a></p>
        
      {/*  contact part  */}
    <br />
      <p><BsFillTelephoneFill/><a href="https://goo.gl/maps/PUcoT7LHxXddRB9k6" className={classes.a}>Phone: default;  </a></p>

      {/* since */}
      <p><BsInfoCircle/>Since: 2012</p>
      </div>
      
    {/* 2 */}

    <div className={classes.img}>
      <img src={aboutImage} alt="" />
      </div>

    </div>
     {/*  */}
   {/* closing div */}
   </div>
  )
}

export default About;