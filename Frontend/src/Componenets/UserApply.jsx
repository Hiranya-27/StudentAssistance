// UserApply.jsx
import { useState } from 'react';
import NavBar from '../NavBar';
import sharedState from './SharedState';
import './UserApply.css';
import { Link } from 'react-router-dom';
const UserApply = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    // Fields from the first page
    name: '',
    email: '',
    mobile: '',
    course: '',
    scheme: sharedState.content,
    amount: '',
    purpose: '',

    // Additional fields for the second page
    panCard: '',
    salary: '',
    aadharNo: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.scheme);
    // Perform form submission logic here (e.g., API request)
    // For demonstration purposes, simulate a successful submission
    setStatus('Application submitted successfully!');
  };

  return (
    <div className='nn'style={{backgroundImage: 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERMSH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7DGkigBFBJ1oAFhIsgIY1IYCSGNYYCYKoM4Y0AzhjQDOGNICYYuGAyVrEwGcGrEBkUBKigIzetoDA1gAGKAooCyEWAYsIAEFABQQUA")', backgroundSize: 'cover', minHeight: '100vh',height:'1200px',paddingLeft:'10px'}}>
    <div>
      <NavBar />
      <br /><br />
      <div className="container">
      <br /><br />
        <form action="#" method="post" onSubmit={handleSubmit}>
       
         
          
          {currentPage === 1 && (
            <>
              {/* Fields for Page 1 */}
              <div className="form-row">
                <label htmlFor="name">FULL NAME:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <label htmlFor="email">EMAIL:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <label htmlFor="mobile">MOBILE NUMBER:</label>
                <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" value={formData.mobile} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <label htmlFor="course">COURSE NAME: </label>
                <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
              </div>

              {/* <h5 style={{ color: 'red', paddingLeft: '400px' }}>
                *If you apply Loan Under Any scheme Please Specify Below
              </h5> */}

              {/* <div className="form-row">
                <label htmlFor="scheme">COURSE DURATION: </label>
                <input type="text" id="scheme" name="scheme" value={formData.scheme} onChange={handleChange} />
              </div> */}

              <div className="form-row">
                <label htmlFor="amount">COURSE AMOUNT:</label>
                {/* <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required /> */}
                <select id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required>
                  <option value="" disabled>Select a amount</option>
                  <option value="crop">1000</option>
                  <option value="equipment">5000</option>
                  <option value="land">10,000</option>
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="purpose">COURSE DURATION:</label>
                <select id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required>
                  <option value="" disabled>Select a duration</option>
                  <option value="crop">20 Days</option>
                  <option value="equipment">1 Month</option>
                  <option value="land">3 Months</option>
                </select>
              </div>
            </>
          )}

{currentPage === 2 && (
            <>
              {/* Fields for Page 2 */}
              
            </>
          )}

          {currentPage==1&&(<div className="radio-buttons-container">
            {/* <label>
              <input
                type="radio"
                id="page1"
                name="page"
                value={1}
                checked={currentPage === 1}
                onChange={() => handlePageChange(1)}
              />
              Page 1
            </label> */}
           
           <div className='pay'>
  <Link to="/payment">
    <button type="submit">Proceed to Payment</button>
  </Link>
</div>
            {/* <label>
              <input
                type="radio"
                id="page2"
                name="page"
                value={2}
                checked={currentPage === 2}
                onChange={() => handlePageChange(2)}
              />
              Page 2
            </label> */}
          </div>)}
          {currentPage==2&&(<div><div className="radio-buttons-container">
            <label>
              <input
                type="radio"
                id="page1"
                name="page"
                value={1}
                checked={currentPage === 1}
                onChange={() => handlePageChange(1)}
              />
              
            </label>

          
           
          </div>
            <br/><br/>
           <button type="submit">Submit </button></div>)}

          
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
    </div>
  );
};

export default UserApply;
