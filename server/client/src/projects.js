import React, { Component } from 'react';
import './App.css';



class Projects extends Component {
    
    render() {
      return ( <div className="item">
      <span className="project-title"><a href={this.props.url} target="_blank">{this.props.item.projectname}</a></span> - 
      <span className="project-tagline">{this.props.item.details} </span>
  </div>)

    }
}

export default Projects;