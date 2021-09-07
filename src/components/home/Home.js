import react, {Component} from 'react'
import './Home.css'

import LoadingBar from 'react-top-loading-bar'
import React, { useState, useEffect } from 'react'
import { Button, Card, ProgressBar, Alert } from 'react-bootstrap';
import { SpinnerDotted } from 'spinners-react';

import Badge from 'react-bootstrap/Badge'
import irelandFlag from './assets/ireland.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'

import python from './assets/python.png'
import sql from './assets/sql.png'
import java from './assets/java.png'
import atom from './assets/atom.png'

import cv from './assets/cv.png'
// import cv_file from process.env.PUBLIC_URL+'Benedict-McGovern-CV.pdf'
import profile_picture from './assets/profile.png'

// import { Parallax, Background } from 'react-parallax';
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Typed from 'react-typed';
import Particles from "react-particles-js"
import Fade from 'react-reveal/Fade';
import CustomCard from './Card'
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { Document, Page } from 'react-pdf';



const config = {
    "particles": {
        "color": {
            "value": "#919191"
        },
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }, 
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#51ADCF",
            "opacity": 0.4,
            "width": 1
          },
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}



const Home = () =>{


    const [introTextFade, setIntroTextFade] = useState(false);

    const [particles, setParticles] = useState(false);

    const [introText, setIntroText] = useState(false)

    const [progress, setProgress] = useState(0)

    const [showButton, setShowButton] = useState(false)

    const [Alert, setAlert] = useState(true);



    const sleep = (milliseconds) => {
        console.log("Sleeping")
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const mimicLoading = async () => {
        let nums = [10,20,40,60,90]
        for (const num of nums) {
            setProgress(num)
            await sleep(200)
          }
    }      


    

    const contactEmail = () =>{
        navigator.clipboard.writeText('benmcgovern13@gmail.com')
        console.log("Here")
        toast.success("Email Copied! 😃", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    }


    useEffect(() =>{
        console.log("Setting event listener")
       
        mimicLoading()    
    }, [])


    useEffect(()=>{
        setTimeout(() => {
            setIntroText(true)
          }, 2000)
          
        setTimeout(() => {
            console.log("Setting fade to true...")
            setIntroTextFade(true)
            setShowButton(true)
            setParticles(true)
          }, 5800)
    })



    const handleScroll = ()=>{
        if (!introTextFade & introText){
            console.log("Setting fade...")
            setIntroTextFade(true)
            setShowButton(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [introTextFade, introText]);


    // const NotificationContainer = window.ReactNotifications.NotificationContainer;
    // const NotificationManager = window.ReactNotifications.NotificationManager;
      

    
    return(   
        <div className="home">
            {/* Loading Bar */}
            
            <div>
                <LoadingBar
                    color='#51adcf'
                    progress={100}
                    onLoaderFinished={() => setProgress(0)}
                    height={5}
                    className='line'
                />
            </div>
            {/* Nav Bar */}

            
            {/* Main Container */}
            {
                particles ? <Particles className={"particles-js"} params={config}/> :
                null
            }
            <div className="home-container">
                
            
                <div className="container">
                    
                    <div className="home-header">
                        {
                            introText ? <div className="text-div">
                                    <Typed
                                        strings={[
                                            'Hello!',
                                            "I'm Benedict McGovern."]}
                                        typeSpeed={60}
                                        className="header-text"
                                        backDelay={600}
                                        backSpeed={50}
                                    />
                                    <br/>
                            </div> :
                            <div className="load-holder">
                                <SpinnerDotted size={200} speed={50} thickness={100} color="rgba(81,173,207)"  enabled={true}/>
                            </div>
                        }
                    </div>
                    

                    <div className="fade-box">
                        
                        <Fade in={introTextFade} timeout={1600} >
                            <div>
                                <div className="short-description" >
                                    I am a <span className="blue">Software Engineer</span> 💻 living in Dublin, Ireland  <img src={irelandFlag} className="ireland-flag" ></img> <br/><br/> I enjoy creating projects to learn <span className="blue">Data Science</span> 🔬 <br/><br/>
                                    Here are my links: <a className="link" href="https://www.linkedin.com/in/benedict-mcgovern/" target="_blank" rel="noreferrer"> LinkedIn</a> <img className="link-linkedin" src={linkedin}/>, <a className="link" href="https://github.com/benedictmc/" target="_blank" rel="noreferrer" >GitHub</a>  <img className="link-github"  src={github}/> and <a className="link" href={process.env.PUBLIC_URL+'/Benedict McGovern CV.pdf'} without rel="noopener noreferrer" target="_blank">CV</a> <img className="link-cv" src={cv}/> 
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="learn-more">
                        { showButton ? <Link activeClass="active" className="test4" to="about-me" spy={true} smooth={true} duration={500}><Button variant="outline-primary">Learn More</Button></Link> : <div className="empty-space"> </div> }
                    </div>


                </div>
            
               
            </div>
            <Element name="scrollToAbout" className="element"></Element>
            <div className="about-me">
                <div className="profile-skills">
                        <img className="profile-image" src={profile_picture}></img>
                        <div class="profile-text">
                            <h4 className="about-heading">About Me</h4>
                            <div className="profile-description">
                                My name is Benedict McGovern (Ben). <br/><br/> I am a software engineer. I have a completed a B.Sc in Computer Science and Software Engineering Degree from <a href="https://www.maynoothuniversity.ie/" target='_blank'>Maynooth University</a> graduating in 2019. I learned many core computer science concepts including computer architecture, formal logic and algorithms and data structures.<br/><br/> 
                                I have worked as a full stack developer for a cloud service company called <a target='_blank' href="https://www.ek.co/">Ekco</a>. I developed a web application with a Python backend and React front end. I have also completed a software developer internship in <a target='_blank' href="https://www.sap.com/uk/index.html">SAP</a>.
                            </div>
                        </div>
                </div>
                <Element name="scrollToSkills" className="element"></Element>
                <div className="skill-card">
                    <h3 className="about-heading">Skills</h3>
                        <Fade left>
                        <Card>
                            
                            <Card.Body>
                                <Card.Title className="skill-title ">Main Skills</Card.Title>
                                <Card.Text>
                                    <div className="skill">
                                        <div className="skill-text">Python</div> <img src={python} className="python-icon" ></img>
                                        <ProgressBar now={95}></ProgressBar>
                                    </div>
                                    
                                    <div className="skill">
                                        <div className="skill-text">SQL</div> <img src={sql} className="python-icon" ></img>
                                        <ProgressBar now={92}></ProgressBar>
                                    </div>
                                    <div className="skill">
                                        <div className="skill-text">React</div> <img src={atom} className="python-icon" ></img>
                                        <ProgressBar now={90}></ProgressBar>
                                    </div>
                                    <div className="skill">
                                        <div className="skill-text">Java</div> <img src={java} className="python-icon" ></img>
                                        <ProgressBar now={85}></ProgressBar>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            
                            <Card.Body>
                                <Card.Title className="skill-title">Other Skills</Card.Title>
                                <Card.Text>
                                    <div className="skill-conatiner">
                                        <h3><Badge className="skill-badge" bg="primary">Pandas</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Python Flask</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">API Creation</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Software Testing</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Git</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Celery</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">RabbitMQ</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">PyTorch</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Numpy</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Data Visulation</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">JavaScript</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Docker</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">CI/CD</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Linux</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Networking</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Blockchain</Badge></h3>
                                        <h3><Badge className="skill-badge" bg="primary">Cryptocurrency</Badge></h3>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Fade>
                </div>
            </div>
            
            <Element name="scrollToProjects" className="element"></Element>
            
            <div className="projects">
                <div className="project-container">
                    <Fade top>


                    <h4 className="about-heading">Projects</h4>
           

                        
                    </Fade>
                </div>
                <div className="project-box">
                            <CustomCard card={ 
                                {
                                    "title": "GAN Price Prediction", 
                                    "class": "custom-card custom-card-GAN",
                                    "description": "Used Generative Adversarial Network (GAN) to complete a timeseries prediction of bitcoin price. Used Python with Keras to build a GAN neural network",
                                    "link": "https://colab.research.google.com/drive/1xWj68aaYW9ZDNZrWzfEFyOXlKVaP91U-", 
                                    "githubLink": "https://github.com/benedictmc/Final-Year-Project",
                                    "hasPDF": true,
                                    "pdfLink": process.env.PUBLIC_URL+'/GAN Timeseries Prediction.pdf'
                                }}/>
                            <CustomCard card={
                                {
                                    "title": "AI Lyric Generator", 
                                    "class": "custom-card custom-card-music-ai",
                                    "description": "Generate new song lyrics through a Recurrent Neural Network. Creates lyrics that match an artist's style and flow. Created with Python and Angular",
                                    "link": "https://master.dxk1rjs20wj09.amplifyapp.com/", 
                                    "githubLink": "https://github.com/benedictmc/lyric-generation",
                                    "hasPDF": false
                                }}/>
         
                            {/* <CustomCard card={{"title": "AI Lyric Generator"}} /> */}
                </div>

            </div>
            <Element name="scrollToContact" className="element"></Element>
            <div className="contact">
                <div className="skill-card">
                        
                        <div className="contact-div">
                            <h3 className="about-heading">Contact</h3>
                            <p className="contact-text">
                            I am currently interested in joining an ambitious and innovative team in the Software Engineering/Data Engineering field. I am also interested in any freelance projects! <br/> 
                            Feel free to send me an email below!
                            <br></br>
                            </p>
                            <Button className="contact-button" size="lg" onClick={contactEmail}>
                                benmcgovern13@gmail.com
                            </Button>
                            <ToastContainer />
                        </div>
                    </div>
            </div>

            <div className="footer">

            </div>
        </div>
    )
}



export default Home;