import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, CardContent } from '@mui/material';

function Home() 
{
  return (
    <div className="home-container">
      <nav className="navbar">

        <Typography variant="h6" component={Link} to="/" className="navbar-brand">
         KEC IIC
        </Typography>

        <div className="navbar-links">
          <Button component={Link} to="/" color="inherit" className="navbar-link">
            Home
          </Button>
    
          <Button component={Link} to="/about" color="inherit" className="navbar-link">
            About Us
          </Button>

          <Button component={Link} to="/contact" color="inherit" className="navbar-link">
            Innovation Council
          </Button>

          <Button component={Link} to="/signUp" color="inherit" className="navbar-link">
            Sign Up
          </Button>
          
          <Button component={Link} to="/login" color="inherit" className="navbar-link">
            Login
          </Button>
        </div>
      </nav>

      <section className="hero-section">

        <Grid container direction="column"  className="hero-content">
          <Grid item>
            <Typography variant="h3" align="center" className="hero-title">
              WELCOME TO KEC IIC
            </Typography>

            <Typography variant="body1" align="center" className="hero-description">
            KEC IIC will focus on creating complete ecosystem which will foster the culture of Innovation across all students from ideas generation to pre-incubation, incubation and graduating from the incubator as successful start-ups.
            </Typography>

            <Button variant="contained" component={Link} to="/learn-more" className="hero-button">
              Learn More
            </Button>
            
          </Grid>
        </Grid>
      </section>

      <section className="services-section">

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className="services-title">
            INITIATIVES - Opening up to new possibilities
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="service-card">
              <CardContent>
                <Typography variant="h5" component="h2" > 
                  KAPILA
                </Typography>

                <Typography variant="body2" color="textSecondary">
                Kalam Program for IP Literacy and Awareness
                <br/>
                KAPILA is a scheme that provides financial assistance to the institutions that are part of the Higher Education Institutions (HEIs) for filing patent, which will create appropriate awareness regarding the need of IP filing, mechanism, and methodology involved in filing IP in India and globally, especially amongst students and faculty of higher education institutions.
                </Typography>

                <Button component={Link} to="/login" color="inherit" className="button-link">
            Login
          </Button>
              </CardContent>
              
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="service-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  YUKTI
                </Typography>
                <Typography variant="body2" color="textSecondary">
                Kalam Program for IP Literacy and Awareness
                <br/>
                YUKTI - National Innovation Repository (NIR) is an initiative of the Ministry of Education (MoE) Government of India and it is implemented by MoE's Innovation Cell and AICTE to build a system of repository of ideas, innovations and startups developed in academic institutions and enabling institutions to systematically foster the I&E culture by managing and nurturing these innovations.
                  </Typography>
              </CardContent>
            </div>
          </Grid>


          <Grid item xs={12} sm={6} md={4}>
            <div className="service-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  NSIP
                </Typography>
                <Typography variant="body2" color="textSecondary">
                National Innovation and Startup Policy 
                <br/> 
                This policy intends to guide HEIs for promoting students' driven innovations & start-ups and to engage the students and faculty in innovation and start up activities in campus. The policy aims at enabling HEIs to build, streamline and strengthen the innovation and entrepreneurial ecosystem in campus and will be instrumental in leveraging the potential of student's creative problem solving and entrepreneurial mind-set.
                </Typography>
              </CardContent>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className="service-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                Smart India Hackathon (SIH)
                </Typography>
                <Typography variant="body2" color="textSecondary">
                Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving. The first four editions SIH2017, SIH2018, SIH2019 and SIH2020 proved to be extremely successful in promoting innovation out-of-the-box thinking in young minds, especially engineering students from across India.
                </Typography>
              </CardContent>
            </div>
          </Grid>


          <Grid item xs={12} sm={6} md={4}>
            <div className="service-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  IIC
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 Primarily, IIC's role is to engage large number of faculty,students and staff in various innnovation and entrepreneurial related activities such as ideathon, Problem solving, Proof of Concept development, Design Thinking at pre incubation or incubation stage, so that the innovation and enterprnurship exosystem gets established and stabilized in HEIs. The IIC model is designed to address the existing challenges or issues in HEIs. 
                 </Typography>
              </CardContent>
            </div>
          </Grid>

          
        </Grid>
      </section>


      <section className="partner-section">

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className="partner-title">
            IMPLEMENTING PARTNERS
            </Typography>
          </Grid>


          <Grid item xs={12} sm={6} md={2}>
            <div className="partner-card">
              <CardContent>
                <Typography variant="h5" component="h2" > 
                  Moe
                  <br/>
                  <img src="" alt="" />
                
                </Typography>
                Ministry of Education (MoE), Govt. of India has established ‘MoE’s Innovation Cell (MIC)’ to systematically foster the culture of Innovation amongst all Higher Education
                <Typography variant="body2" color="textSecondary">
                  
                </Typography>
                
              </CardContent>
              
            </div>
          </Grid>


          <Grid item xs={12} sm={6} md={2}>
            <div className="partner-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  MIC
                  <br/>
                  <img src="" alt="" />
                </Typography>
                <Typography >
                Innovation and entrepreneurship are at the peak in India. In order to make development a comprehensive mass movement and innovate on all fronts, MoE, AICTE, i4C
                </Typography>
              </CardContent>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <div className="partner-card">

              <CardContent>

                <Typography variant="h5" component="h2">
                  AICTE
                  <br/>
                </Typography>
                Innovation and entrepreneurship are at the peak in India. In order to make development a comprehensive mass movement and innovate on all fronts, MoE, AICTE, i4C
                <Typography variant="body2" color="textSecondary">

                </Typography>
              </CardContent>
            </div>
          </Grid>

          
        </Grid>
      </section>

      <br /><br /> <br />
    </div>
  );
}

export default Home;