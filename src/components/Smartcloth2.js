import React from 'react'
import classes from '../styles/pages.module.css';
import imageData from '../Data.JSON/data2';
export default function Samrtcloth2 (){
    return (
    <>
        <div>
    <div className={classes.videos}>
    {/*  main title */}
        
          {/*  image */}
        {
            imageData.map((index) => {
                return(
             <>
                    <div className={classes.video} key={index.id}>
                        <h3 className={classes.headingtitle}>{index.Mtitle}</h3>

                    <img src={index.image} alt='this smart cloth ' />
                        <p className={classes.ProductTitle}> {index.description}</p>
                        
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