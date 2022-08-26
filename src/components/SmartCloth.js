import React from 'react'
import classes from '../styles/pages.module.css';
import imageData from '../Data.JSON/data';
import Others from '../components/pics-of-components/Buttons/Others';

const SmartCloth = () => {
  return (
    <div>
    <div className={classes.videos}>
    {/*  main title */}
    
          {/*  image */}
        {
            imageData.map((item) => {
                return(
             <>
                    <div className={classes.video} key={item.id}>
                        <h3 className={classes.headingtitle}>{item.headingtitle}</h3>

                    <img src={item.image} alt='this smart cloth ' />
                        <p className={classes.ProductTitle}> {item.description}</p>
                        
                      </div>


                    
</>
 
 )
                  
            })

        }







          {/*others page */}
          <Others />
          
    </div>
    </div>
  )
}

export default SmartCloth