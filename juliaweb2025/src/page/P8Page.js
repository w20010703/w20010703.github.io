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


class P8Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2024 Fall",
      award: "Cornell DESIGN 6397",
      title: "MIXI",
      team: "[Team Project by a 3-Person Team]",
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
              <source src="/P8/MIXI.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Design a Beverage Machine that Enhances Long-Distance Relationships. "</h2>
            </div>

            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P8/ppt.pdf">[PPT]</a><a href="https://github.com/Sissytttt/MIXI-AIdrinkmixer.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#Smart Design #Innovative Solutions #AIoT Devices #Interactive Drinks #LLM</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Software Development, Hardware Development, Full-Stack Connection, Product Implementation and Testing</p>
              <h4>Skills</h4>
              <p>p5.js, Three.js, React.js, OpenAI Agent, Arduino Micro, Raspberry Pi 4, 3D Printing (Prusa)</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P8Page;
