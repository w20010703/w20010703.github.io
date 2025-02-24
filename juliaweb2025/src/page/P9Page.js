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


class P9Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2024 Fall",
      award: "Cornell DESIGN 6397",
      title: "Curling Game",
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
              <source src="/P9/curling.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Create a Collaborative 1D Curling Game Where One Player Pushes the Stone, and the Other Sweeps to Adjust Its Position Based on In-Game Hints. "</h2>
            </div>

            <div className="gap_h"></div>

            <img src="/P9/1.jpg" width="100%" />

            <div className="gap_h"></div>
            
            <img src="/P9/3.jpg" width="74%" />
            <div className="gap_w"></div>
            <img src="/P9/4.jpg" width="24%" />

            <div className="gap_h"></div>

            <img src="/P9/5.jpg" width="34%" />
            <div className="gap_w"></div>
            <img src="/P9/2.jpg" width="64%" />

            

            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P9/ppt.pdf">[PPT]</a><a href="https://github.com/w20010703/CurlingGame.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#Curling Game #Game Development #1D Game #Multiplayer Gaming #Interactive Gaming</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Game Design, Software Development, Full-Stack Integration, Product Implementation & Testing</p>
              <h4>Skills</h4>
              <p>p5.js, Arduino Micro, 3D Printing (Prusa)</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P9Page;
