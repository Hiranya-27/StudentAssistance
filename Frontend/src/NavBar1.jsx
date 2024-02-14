import  { useEffect } from 'react';
import "./Navbar.css";
import { Avatar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NavBar1 = () => {
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
          { <img src="data:image/png;base64,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" />}
        </div>
        <ul>
          <li><a href="/adminHome">Dashboard</a></li>
          {/* <li><a href="/loanStatus">Enquiry Status</a></li> */}
          <li><a href="/schemes">COurse Details</a></li>
          <li><a href="/adminProfile">Profile</a></li>
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
              <Button class='txt' href="/login">LOGOUT</Button>
            )}
          </div>
        
      </nav>
    </header>
  );
};

export default NavBar1;
