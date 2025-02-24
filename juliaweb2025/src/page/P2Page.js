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


class P2Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2024 Fall",
      award: "Cornell DESIGN 6197",
      title: "Timber Joint For Robot",
      team: "[Team Project by a 4-Person Team]",
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
            <img src="/P2/2.png" width="100%" />

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How can we utilize robots for timber fabrication in both 2.5D and 3D, modularize the design, and ultimately create a tensegrity chair using 2 pieces of 4×6 timber? "</h2>
            </div>

            <div className="gap_h"></div>

            <img src="/P2/1.png" width="100%" />

            <div className="gap_h"></div>

            <img src="/P2/3.png" width="49%" />
            <div className="gap_w"></div>
            <img src="/P2/4.png" width="49%" />

            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>

            <video width="100%" controls>
              <source src="/P2/ROBOTIC FABRICATION & DESIGN.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P2/poster1.png">[Poster]</a><a href="/P2/poster2.png">[Poster]</a></p>
              <h4>Project Type</h4>
              <p>#Tensegrity Design #Robotic Fabrication #CNC Automation #Parametric Design</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Robotic Control, Physical Model Fabrication, Grasshopper Programming</p>
              <h4>Skills</h4>
              <p>ABB RobotStudio, Rhino, Grasshopper, 3D Printing (Prusa)</p>
            </div>


          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P2Page;
