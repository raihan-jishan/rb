/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classes from  '../styles/footer.module.css';
import ScrollToTop from 'react-scroll-to-top';
const Footer = () => {
	//  short code </>
	
  return (
	<footer className={classes.footer}>
	<div className={classes.container}>
		<div className={classes.row}>
			<div className={classes.footerCol}>
				<h4>PRODUCT</h4>
				<ul>
					<li><a href="#">CRUSH</a></li>
					<li><a href="#">SMART</a></li>
					<li><a href="#">TURKISH</a></li>
					<li><a href="#">PARDA</a></li>
				</ul>
			</div>
			<div className={classes.footerCol}>
				<h4>get help</h4>
				<ul>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">shipping</a></li>
					<li><a href="#">returns</a></li>
					<li><a href="#">order status</a></li>
					<li><a href="#">payment options</a></li>
				</ul>
			</div>
			<div className={classes.footerCol}>
				<h4>online shop</h4>
				<ul>
					<li><a href="#">watch</a></li>
					<li><a href="#">PRODUCT</a></li>
					<li><a href="#">CRUSH</a></li>
					<li><a href="#">SMART</a></li>
				</ul>
			</div>
			<div className={classes.footerCol}>
				<h4>follow us</h4>
				<div className={classes.socialLinks}>
					{/* <a href="#"><i className={classes.fab fa-facebook-f"></i></a>
					<a href="#"><i className={classes.fab fa-twitter"></i></a>
					<a href="#"><i className={classes.fab fa-instagram"></i></a>
					<a href="#"><i className={classes.fab fa-linkedin-in"></i></a> */}
				</div>
			</div>
					{/* scroll to top */}
					<div>
      
      <div style={{ marginTop: "150vh" }} />
      <ScrollToTop smooth />
    </div>


		</div>
	</div>
</footer>
  )
}

export default Footer