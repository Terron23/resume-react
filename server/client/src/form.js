import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Skills from './skills.js'
import Resume from './resume.js'
import Expert from './expert.js'
import Projects from './projects'



class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            resume: [],
           
        }
    }


    componentDidMount() {
        axios.get("http://localhost:3001/resume1")
        .then( (response) => {
           
            let data = response.data
            console.log("Main Test", data[0])
            this.setState({resume: data[0], url: window.location.pathname})
            console.log("Data", this.state.resume);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
       
      }

    renderExperienceInput =() => {
        let experience1 =[]
        let data = []
     let test = this.state.resume.experience;
     if (this.state.resume.experience) {
        console.log("Test", this.state.resume.experience[0].company);
        this.state.resume.experience.map((work, i) =>{
            data.push(work)
            console.log("More Data", data)
        })
    

        for(var i=0; i<3; i++){

            experience1.push(
                <div>
<div className="form-group">

            <input type="text" className="form-control" onChange={this.handleChange} placeholder={`jobtitle${i+1}` } 
            name={`jobtitle${i+1}`} defaultValue={this.state.resume.experience.length > 0 ?  this.state.resume.experience[i].jobtitle : ""} />
            </div>
            <div className="form-group">
            <input type="text" className="form-control" onChange={this.handleChange} placeholder={`period${i+1}`} name={`period${i+1}`} defaultValue={this.state.resume.experience.length > 0 ?  this.state.resume.experience[i].period : ""} 
            />
            </div>
            <div className="form-group">
            <input type="text" 
            className="form-control" 
            onChange={this.handleChange} 
            placeholder={`company${i+1}`} 
            name={`company${i+1}`} 
            defaultValue={this.state.resume.experience.length > 0 ?  this.state.resume.experience[i].company : ""} 
            />
            </div>
            <div className="form-group">
            <input type="text" 
            className="form-control" 
            onChange={this.handleChange} 
            placeholder={`companyurl${i+1}`} 
            name={`companyurl${i+1}`} defaultValue={this.state.resume.experience.length > 0  ? this.state.resume.experience[i].companyURL : ""} 
            />
            </div>
            <div className="form-group">
            <textarea 
            className="form-control" 
            onChange={this.handleChange} 
            placeholder={`description${i+1}`} 
            name={`description${i+1}`} 
            defaultValue={this.state.resume.experience.length > 0 ? this.state.resume.experience[i].description : ""}
            ></ textarea>
            </div>
           </div>)
        }
    }
        console.log(experience1)
        return experience1;
    }

    renderProjectsInput =() => {
        let skills =[]
        let data = []
        if (this.state.resume.projects) {
            console.log("Test", this.state.resume.projects[0].company);
            this.state.resume.projects.map((work, i) =>{
                data.push(work)
                console.log("More Data", data)
            })
        for(var i=0; i<3; i++){

            skills.push(
                <div>
<div className="form-group">
            <input type="text" className="form-control" onChange={this.handleChange} placeholder={`projectname${i+1}`} name={`projectname${i+1}`} defaultValue={this.state.resume.projects.length > 0 ? this.state.resume.projects[i].projectname : ""} />
</div>
            <div className="form-group">
            <input type="text" className="form-control" onChange={this.handleChange} placeholder={`url${i+1}`} name={`url${i+1}`} defaultValue={this.state.resume.projects.length > 0 ? this.state.resume.projects[i].url : ""} />
            </div>
            <div className="form-group">
            <input type="text" className="form-control" onChange={this.handleChange} placeholder={`details${i+1}`} name={`details${i+1}`} defaultValue={this.state.resume.projects.length > 0 ? this.state.resume.projects[i].details : ""}/>
           </div>
           </div>)
        }
    }
        console.log(skills)
        return skills;
    }

    
    
      render() {
          let {resume, url} = this.state
        
        return (
     <div className="container-fluid">
    <div className="col-md-3"> 
    <form className="inline" action={`http://localhost:3001/resume`} method="POST">
    <div className="form-group">
    <input className="form-control" onChange={this.handleChange}type="text" placeholder="summary" name="summary" 
    defaultValue={ resume.summary}/>
    </div>
    <div className="form-group">
    <input className="form-control" onChange={this.handleChange}type="text" placeholder="tag-line" name="tagline" 
    defaultValue={ resume.tagline}/>
    </div>
    <div className="form-group">
    <input className="form-control" onChange={this.handleChange}type="text" placeholder="name" name="name" defaultValue={resume.name}/>
    </div>
    <div className="form-group">
    <input className="form-control" onChange={this.handleChange}type="text" placeholder="email" name="email"  defaultValue={resume.email}/>
    </div>
    <div className="form-group">
    <input className="form-control" onChange={this.handleChange}type="text" placeholder="phone" name="phone" defaultValue={resume.phone}/>
    </div>
    <div className="form-group">
    <input className="form-control" onChange={this.handleChange}type="text" placeholder="website" name="website" defaultValue={resume.website}/>
    </div>
    <div className="form-group">
    <input className="form-control" onChange={this.handleChange}type="text" placeholder="linkdin" name="linkdin" defaultValue={resume.linkedin} />
    </div>
    <div className="form-group">
  
    <input className="form-control" onChange={this.handleChange}type="text" placeholder="github" name="github" defaultValue={resume.github} />
    </div>
  {this.renderExperienceInput().map((experience) => {
      return experience
  }
)}

{this.renderProjectsInput().map((skills) => {
    return skills
}
)}
    <button className="btn btn-primary" type="submit">Submit</button>
  </form>  
  </div>  
  <div className="col-md-9"> 
<Resume resume={resume}/>
  </div>        
       </div>
        );
      }
    }
    
    export default Form;
    

    // jobtitle1 : {type: String, required: true, max: 100},
	// period1: {type: String, required: true, max: 100},
	// company1: {type: String, required: true, max: 100},
    // companyURL1: {type: String, required: true, max: 100},
    // jobtitle2 : {type: String, required: true, max: 100},
	// period2: {type: String, required: true, max: 100},
	// company2: {type: String, required: true, max: 100},
    // companyURL2: {type: String, required: true, max: 100},
    // details2: {type: String, required: true, max: 100},
    // jobtitle3 : {type: String, required: true, max: 100},
	// period3: {type: String, required: true, max: 100},
	// company3: {type: String, required: true, max: 100},
    // companyURL3: {type: String, required: true, max: 100},
	// details3: {type: String, required: true, max: 100},
    // projectname1 : {type: String, required: true, max: 100},
	// url1 :{type: String, required: true, max: 100},
    // details1: {type: String, required: true, max: 100},
    // projectname2: {type: String, required: true, max: 100},
	// url2 :{type: String, required: true, max: 100},
    // details2: {type: String, required: true, max: 100},
    // projectname3: {type: String, required: true, max: 100},
	// url3 :{type: String, required: true, max: 100},
	// details3: {type: String, required: true, max: 100},