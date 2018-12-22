import React, { Component } from 'react';
import './App.css';
import resume from './res.json'


class Expert extends Component {
    
    render() {
        console.log(resume)
      return (<div className="item">
      <div className="meta">
          <div className="upper-row">
              <h3 className="job-title">{this.props.item.jobtitle} </h3>
              <div className="time">{this.props.item.period}</div>
          </div>
          <div className="company"><a href={this.props.item.companyUrL}>{this.props.item.company}</a></div>
      </div>
      <div className="details">
         <p> {this.props.item.details}</p>
      </div>
  </div>)

    }
}

export default Expert;