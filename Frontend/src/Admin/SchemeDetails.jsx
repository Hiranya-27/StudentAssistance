// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar1 from '../NavBar1';
import Header from './Header'
import './Home.css'
import { WhatsappShareButton } from 'react-share';
import SharedState from '../Componenets/SharedState';

const SchemeDetails = () => {
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    <div className='App1'>
    <NavBar1/>
     <div className="SideMenuAndPageContent">
     <Header/>
     
     <div className="das">
    <div className='nn'style={{ backgroundSize: 'cover', minHeight: '100vh',height:'1000px'}}>
    
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/f6/34/08/f634088997384bfe69ce2ff55a851221.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Artificial Intelligence
          </Typography>
          <Typography variant="body2" color="text.secondary">
          An artificial intelligence course explores the fundamental principles and techniques underlying the development of intelligent systems. 
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>

      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
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
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
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
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/2f/9a/1a/2f9a1a27e8f07b002e51dbbc0196a2de.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Engineering graphics
          </Typography>
          <Typography variant="body2" color="text.secondary">
          An engineering graphics course typically covers fundamental principles of technical drawing, introducing students to concepts like orthographic projection, isometric drawing, and dimensioning. 
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

    <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/75/88/7c/75887c8cd9beabb8c17e2af41aa1650d.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Tamil
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Tamil course offers comprehensive language instruction, covering essential aspects of grammar, vocabulary, and cultural nuances hrough interactive lessons and practical exercises.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6853" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/7c/f9/98/7cf998a6d4799c6e22ba8975c5425b31.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Engineering Mathematics
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The mathematics course provides a foundational understanding of numerical concepts, equations, and problem-solving techniques, fostering critical thinking and analytical skills. 

          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}  href="https://www.tn.gov.in/scheme/data_view/6849" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/7f/40/08/7f4008447736103f4247010fde4ccf05.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Structural designing
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A civil engineering course equips students with the knowledge and skills to design, construct, and maintain infrastructure projects such as buildings, bridges, and transportation systems.
          </Typography>
        </CardContent>
        <CardActions>
          <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6847"size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card  sx={{
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '20px',
    border: '2px solid #00ff00', // Green border color
    transition: 'transform 0.3s ease', // Adding transform transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Increasing scale on hover
    },
  }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/28/91/6a/28916adb660274bfd51de2d29deafb9b.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Robotics
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A robotics course delves into the interdisciplinary field of designing, building, and programming robotic systems by exploring in mechanics, electronics, to understand the fundamentals of robotics. 
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}href="https://www.tn.gov.in/scheme/data_view/19670" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default SchemeDetails;