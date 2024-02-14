// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';

import './Landing.css'
// import { WhatsappShareButton } from 'react-share';
import SharedState from './SharedState';

const Landing = () => {
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    <div className='nn'style={{backgroundImage: 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERMSH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7DGkigBFBJ1oAFhIsgIY1IYCSGNYYCYKoM4Y0AzhjQDOGNICYYuGAyVrEwGcGrEBkUBKigIzetoDA1gAGKAooCyEWAYsIAEFABQQUA")', backgroundSize: 'cover', minHeight: '100vh',height:'1200px',paddingLeft:'10px'}}>
      <NavBar />
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Card sx={{ maxWidth: 345, marginLeft: '200px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/f6/34/08/f634088997384bfe69ce2ff55a851221.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Artificial intelligence
          </Typography>
          <Typography variant="body2" color="text.secondary">
          An artificial intelligence course explores the fundamental principles and techniques underlying the development of intelligent systems. 
          </Typography>
        </CardContent>
        <CardActions>
        {/* <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton> */}
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginLeft: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/31/f2/c7/31f2c7cd0ff557b49a0545883ae84177.jpg"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Information technology
          </Typography>
          <Typography variant="body2" color="text.secondary">
          An information technology course typically covers a broad range of topics, including computer programming, database management and software development. 
          </Typography>
        </CardContent>
        <CardActions>
        {/* <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton> */}
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '100px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/75/04/6b/75046b59afb2204990e03880c0a00703.jpg"          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Engineering Physics
          </Typography>
          <Typography variant="body2" color="text.secondary">
          An engineering physics course integrates principles from both physics and engineering, offering students a comprehensive understanding of concepts that underlie engineering applications.
          </Typography>
        </CardContent>
        <CardActions>
        {/* <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton> */}
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>
     
    </div>
     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      


        <header className="showcase">
  <h2>Wide range of Courses</h2>
  <p>Select courses on the high demand</p>
  <a href="#" className="btn">
    <i className="fas fa-chevron-right" />
  </a>
</header>
    </div> 
   
    <div>
      <div>
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700&display=swap"
    rel="stylesheet"
  />
  <title>Footer section</title>
  <footer className="footer1">
    <div className="footer-text-content">
      <div className="address info-text-container">
        {/* <div className="circle">
          <i className="fa-solid fa-location-dot info-icon" />
        </div> */}
        <p className="content1">
          Address : No 73, Old flat st, Bramanamangalam, Pallikonda, Vellore -635809
        </p>
      </div>
      <div className="phone info-text-container2">
        {/* <div className="circle">
          <i className="fa-solid fa-mobile info-icon" />
        </div> */}
        <p className="content1">Contact No : +91 6379883965</p>
      </div>
      <div className="mail info-text-container3">
        {/* <div className="circle">
          <i className="fa-solid fa-envelope info-icon" />
        </div> */}
        <p className="content1">Email : vijayprasad7095@gmail.com</p>
      </div>
    </div>
  </footer>
  <footer className="footer2">
    <div className="footer-text-content2">
      <img
        src="https://www.nicepng.com/png/full/246-2467547_your-logo-here-your-logo-here-logo-png.png"
        alt="pic"
        className="logo"
      />
      <p className="content3">
        
      </p>
      <div className="social-icons">
        <ul className="social">
          <li className="social-list">
            <a className="social-item">
              <i className="fa-brands fa-facebook-f fb" />
            </a>
          </li>
          <li className="social-list">
            <a className="social-item">
              <i className="fa-brands fa-twitter tweet" />
            </a>
          </li>
          <li className="social-list">
            <a className="social-item">
              <i className="fa-brands fa-youtube ytb" />
            </a>
          </li>
          <li className="social-list">
            <a className="social-item" />
            <i className="fa-brands fa-instagram insta" />
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-text-content3">
      <p className="content2">Useful Links</p>
      <ul className="navbar">
        <li>
          <a className="nav-item">
            {" "}
            <span className="link-name">Home</span>
          </a>
        </li>
        <li>
          <a className="nav-item">
            {" "}
            <span className="link-name">About</span>
          </a>
        </li>
        <li>
          <a className="nav-item">
            {" "}
            <span className="link-name">Product</span>
          </a>
        </li>
        <li>
          <a className="nav-item">
            {" "}
            <span className="link-name">Services</span>
          </a>
        </li>
        <li>
          <a className="nav-item">
            {" "}
            <span className="link-name">Contact</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-text-content4">
      <p className="content2">Support Links</p>
      <ul className="navbar">
        <li>
          <a className="nav-item">
            {" "}
            <span className="link-name">Login</span>
          </a>
        </li>
        <li>
          <a className="nav-item">
            {" "}
            <span className="link-name">My Account</span>
          </a>
        </li>
        <li>
          <a className="nav-item">
            {" "}
            <span className="link-name">Security</span>
          </a>
        </li>
        <li>
          <a className="nav-item">
            {" "}
            <span className="link-name">Contact</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-text-content5">
      <p className="content2">Subscribe</p>
      <p className="content3">
        Don’t miss to subscribe to our new feeds, kindly fill the form below.
      </p>
      <div className="mail">
        <input type="text" />
        <div className="box">
          <i className="fa-solid fa-paper-plane icon" />
        </div>
      </div>
    </div>
  </footer>
  <footer className="footer3">
    <hr className="line" />
    <p className="content3">
      Copyright©<span className="year">2022</span>All rights reserved |{" "}
      <span className="year">
        {" "}
        <a className="nav-item">
          {" "}
          <span className="link-name">M.R. Vijay Prasad </span>
        </a>{" "}
      </span>
    </p>
  </footer>
</>

      </div>
    </div>
    </div>
  );
}
export default Landing;