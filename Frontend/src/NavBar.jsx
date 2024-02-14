import  { useEffect } from 'react';
import "./Navbar.css";
import { Avatar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const gotoProfile = () => {
    navigate('/profile');
  }

  // Placeholder for checking login status
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='headgreen'>
      <div className="responsive-bar">
        <div className="logo">
          <img src="https://www.shutterstock.com/image-vector/financial-investments-money-savings-concept-600nw-2042511212.jpg" alt="logo" />
        </div>
        <div className="menu">
          <h4>Menu</h4>
        </div>
      </div>
      <nav>
        <div className="logo">
          <img src="data:image/png;base64,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" />
          
        </div>
        <h1>EDUMASTER</h1>
        <ul>
          <li><a href="/home">Home</a></li>
          {/* <li><a href="/loan">Courses</a></li> */}
          <li><a href="/status">Enquiry Status</a></li>
          <li><a href="/pro">Profile</a></li>
          {/* <li><a href="/enq">Enquiry</a></li> */}
          </ul>
         <div className='loggg'>
            {isLoggedIn ? (
              <div onClick={gotoProfile}>
                <Avatar alt="" src="/static/images/avatar/1.jpg" />
                <div className="nav_item" style={{ marginLeft: "-8px", color: "white" }}>
                  {/* Additional content for the profile */}
                </div>
              </div>
            ) : (
              <Button class='txt' href="/">LOGOUT</Button>
            )}
          </div>
        
      </nav>
    </header>
  );
};

export default NavBar;
