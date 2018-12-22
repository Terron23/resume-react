import React, { Component } from 'react';
import './App.css';
//import resume from './res.json'
import axios from 'axios'
import Expert from './expert.js'
import Projects from './projects'
import Skills from './skills.js'
import Form from './form'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            resume: "",
           
        }
    }


    componentDidMount() {
        axios.get("http://localhost:3001/resume1")
        .then( (response) => {
           
            let data = response.data
            this.setState({resume: data[0], url: window.location.pathname})
            console.log("Data", this.state.resume);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleChange (event) {
        this.setState({[event.target.name]: event.target.value})
       
      }


    renderExperiences(){
        let {resume} = this.state
        let arr = []
        console.log("Experience", resume.experience)
        if(resume.experience){
        resume.experience.map((item, i) =>{
arr.push(<Expert item ={item} key ={i}/>)
        })
        return arr;
    }
    }



    renderProjects(){
        let {resume} = this.state
        let arr3 = []
        console.log("Projects", resume.projects)
        if(resume.projects){
        resume.projects.map((item, i) =>{
arr3.push(<Projects item ={item} key ={i}/>)
        })
        return arr3;
    }

    }

    renderSkills(){
        let {resume} = this.state
        let arr2 = []
        resume.skills.map((item, i) =>{
arr2.push(<Skills item ={item} key ={i}/>)
        })
        return arr2;
    }

  render() {
     let {resume} = this.state
    return (
        <div>
             {/* <Form 
             resume={resume} 
             handleChange={this.handleChange} /> */}
             <hr />
      <div className="wrapper">
     
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile img-round" src={resume.image} alt="" />
                <h1 className="name">{resume.name}</h1>
                <h3 className="tagline">Business Intellegence Developer</h3>
            </div>
            
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href={"mailTo"+resume.email}>{resume.email}</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><a href={"tel:"+resume.phone}>{resume.phone}</a></li>
                    <li className="website"><i className="fa fa-globe"></i><a href={resume.website} target="_blank">{resume.website}</a></li>
                    <li className="linkedin"><i className="fa fa-linkedin"></i><a href={resume.linkedin} target="_blank">{resume.linkedin}</a></li>
                    <li className="github"><i className="fa fa-github"></i><a href="#" target="_blank">github.com/username</a></li>
                    
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                <div className="item">
                    <h4 className="degree">MSc in Computer Science</h4>
                    <h5 className="meta">University of London</h5>
                    <div className="time">2011 - 2012</div>
                </div>
                <div className="item">
                    <h4 className="degree">BSc in Applied Mathematics</h4>
                    <h5 className="meta">Bristol University</h5>
                    <div className="time">2007 - 2011</div>
                </div>
            </div>
            
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    <li>English <span className="lang-desc">(Native)</span></li>
                    <li>Spanish <span className="lang-desc">(Professional)</span></li>
                </ul>
            </div>
            
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    <li>Writing</li>
                    <li>Boxing</li>
                    <li>Web Development</li>
                </ul>
            </div>
            
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                <div className="summary">
                    <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                  
                </div>
            </section>
            
            <section className="section experiences-section">
                <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
               
                {this.renderExperiences()}
              
                
            </section>
            
            <section className="section projects-section">
                <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                <div className="intro">
                    <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                {this.renderProjects()}
                </div>
               
             
             
            </section>
            
            <section className="skills-section section">
                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                <div className="skillset">

                     
                  
                    
                                             
                   
                    
                </div>  
            </section>
            
        </div>
        </div>
    </div>
    );
  }
}

export default App;
