import React from 'react'
import classes from '../styles/pages.module.css';
import imageData from '../Data.JSON/data4';
export default function Parda(){
    return(
        <>
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
        
          
    </div>
    </div>
        </>
    )
}