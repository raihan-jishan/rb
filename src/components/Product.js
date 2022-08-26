import React from 'react';
import Img1 from '../assets/img (16).jpg';
import Img2 from '../assets/img (4).jpg';
import Img3 from '../assets/img (11).jpg';
import Img4 from '../assets/img (65).jpg';

import classes from '../styles/product.module.css';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
                <div className={classes.videos}>
          
           <div className={classes.video}>
            <Link to='/smart'><img src={Img1} alt="this is sofa" />
            </Link>
              <p className={classes.ProductTitle}>Smart Sofa cloth</p>
              <div className={classes.qmeta}>
              <button className={classes.Seemore}>  <Link to='/smart' className='SeeMore'> See  collection
              </Link>
              </button>
              </div>
            </div>
      

          
           <div className={classes.video}>
            <Link to='/parda'>
              <img src={Img2} alt="parda" />
              </Link>
              <p className={classes.ProductTitle}>Parda premium</p>
              <div className={classes.qmeta}>
               <button className={classes.Seemore}>  <Link to='/parda' className='SeeMore'> See  collection
               </Link></button>
              </div>
            </div>
      

           
           <div className={classes.video}>
            <Link to='/crush'>
              <img src={Img3} alt="crush sofa" />
              </Link>
              <p className={classes.ProductTitle}>Crush cloth</p>
              <div className={classes.qmeta}>
              <button className={classes.Seemore}>  <Link to='/crush' className='SeeMore'> See  collection
              </Link></button>
              </div>
            </div>
      

          
           <div className={classes.video}>
            <Link to='/turkish'>
              <img src={Img4} alt="turkish" />
              </Link>
              <p className={classes.ProductTitle}>Turkish cloth</p>
              <div className={classes.qmeta}>
              <button className={classes.Seemore}>
                  <Link to='/turkish' className='SeeMore'> See  collection
                  </Link>
                </button>
              </div>
            </div>
      

          
           <div className={classes.video}>
            <Link to={'/foam'}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIZnIy0cA8Ge7EpEuNvwpGAim7y3K5ixxrV9CMB0sP1bR5FxTRZ3qgwQhC5j_F3PbZwg&usqp=CAU" alt="foam" />
              </Link>
              <p className={classes.ProductTitle}>Foam sample</p>
              <div className={classes.qmeta}>
              <button className={classes.Seemore}>  <Link to='/contact' className='SeeMore'> See  collection
              </Link></button>
              </div>
            </div>
      

        
          
        
      
        </div>
    </div>
  )
}

export default Product