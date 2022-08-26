import React from 'react'
import classes from '../styles/pages.module.css';
import Data5 from '../Data.JSON/data5';
export default function Foam() {
    return (
        <div>
        <div className={classes.videos}>
        {/*  main title */}
        
              {/*  image */}
            {
                Data5.map((item) => {
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
         
        </div>
        </div>
    )
}