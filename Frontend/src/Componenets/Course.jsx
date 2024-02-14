import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';
import SharedState from './SharedState';
import './Home.css';
import { courseList } from '../service/user';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    courseList()
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });
  };

  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };

  // CSS for footer
  const footerStyles = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return (
    <div className='nn' style={{backgroundImage: 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAGBABAQEBAQAAAAAAAAAAAAAAAAERMSH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7DGkigBFBJ1oAFhIsgIY1IYCSGNYYCYKoM4Y0AzhjQDOGNICYYuGAyVrEwGcGrEBkUBKigIzetoDA1gAGKAooCyEWAYsIAEFABQQUA")', backgroundSize: 'cover', minHeight: '100vh',height:'1200px',paddingLeft:'10px'}}>
      <NavBar />
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {courses.map(course => (
          <Card
            key={course.course_id} // Assuming course_id is unique
            sx={{ maxWidth: 345,  marginTop: '60px' }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={course.image}
              title={course.course_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {course.course_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
                Apply
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <footer style={footerStyles}>
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
