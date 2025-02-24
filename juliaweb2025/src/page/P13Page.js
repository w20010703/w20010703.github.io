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


class P13Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2019 Nov",
      award: "National Taiwan University EE1004",
      title: "Gong-pig",
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

            <video width="100%" controls>
              <source src="/P13/final.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Design an online multiplayer Gong-pig (Gong-zhu) game. "</h2>
            </div>

            <div className="gap_h"></div>
          
            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P13/ppt.pdf">[PPT]</a><a href="https://github.com/w20010703/gongpig.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#Online Poker Card Game #Web Development</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Team Leadership, Server Development, Interface Design, Software Development</p>
              <h4>Skills</h4>
              <p>Python, Flask</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P13Page;
