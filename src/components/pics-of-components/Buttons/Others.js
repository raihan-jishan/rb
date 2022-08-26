import classes from './Button.module.css';
import {Link} from 'react-router-dom';
import {GoArrowRight} from 'react-icons/go';
export default function Others (){
    return(
        <button type="button" className={classes.button}>
        <Link to={'/smart2'} className='Link'>
  <div className={classes.buttonText}>High range smart <GoArrowRight /></div>
  </Link>
  <div className={classes.buttonIcon}>  </div>
</button>

    )
}