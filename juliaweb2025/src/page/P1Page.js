import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

import WorkCard from '../component/WorkCard'
// import SlideShow from '../components/SlideShow'
// import PicWordWithBtn from '../components/PicWordWithBtn'

// import '../css/main_page.css';
// import { getDataFromServer, dict2urlEncode } from '../http_utils.js'
// import { setCookie, getCookie } from '../cookie_utils.js'


class P1Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2024 Fall",
      award: "Cornell DESIGN 6157",
      title: "Resilient Tensegrity Robot: Inspired by Spider Webs and Melons",
      team: "[Team Project by a 2-Person Team]",
      introduction: "",
      
    }

  }

  render() { 
    return (
      <div className="ppage">
        <div className="title_section">
          <h4 className="date">{this.state.date}</h4>
          <h4 className="award">{this.state.award}</h4>
          <h2 className="title">{this.state.title}</h2>
          <h5 className="team">{this.state.team}</h5>

          <div className="content_holder">

            <video width="100%" controls>
              <source src="/P1/final.MOV" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might we design a web tensegrity structure that is both resilient and capable of moving in an unknown environment, such as space? "</h2>
            </div>

            <div className="gap_h"></div>

            <video width="49%" controls>
              <source src="/P1/1.mp4" type="video/mp4" />
            </video>

            <div className="gap_w"></div>

            <video width="49%" controls>
              <source src="/P1/2.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <img src="/P1/6.png" width="100%" />

            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P1/poster.png">[Poster]</a><a href="/P1/small_poster.png">[Design Matrix]</a></p>
              <h4>Project Type</h4>
              <p>#Tensegrity Design #Structural Innovation #BioInspired Robots #Resilient Structures #Space Robotics</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Robotic Control, Physical Model Fabrication, Digital Model and Physical Simulation</p>
              <h4>Skills</h4>
              <p>Python, ESP32, Rhino, Grasshopper, Karamba3D, MATLAB, , 3D Printing (Prusa), , Adobe Illustrator</p>
            </div>

            
          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P1Page;
