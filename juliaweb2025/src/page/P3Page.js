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


class P3Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2021 March - 2022 March",
      award: "nexuni",
      title: "PCube",
      team: "[Team Project by a 6-Person Team]",
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

            <video width="100%" autoPlay controls>
              <source src="/P3/PCube_Introduction_eng_sub.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might we design a contactless ordering machine that brings the traditional menu to life? "</h2>
            </div>

            <div className="gap_h"></div>



            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P3/pcube1.png">[Poster]</a><a href="/P3/pcube2.png">[Poster]</a><a href="/P3/pcube3.png">[Poster]</a><a href="/P3/pcube4.png">[Poster]</a></p>
              <h4>Project Type</h4>
              <p>#Product Design #Store Management #Pandemic Response #Machine Integration Development</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Hardware Casing Design, User Interface Design and Development</p>
              <h4>Skills</h4>
              <p>PyQt5, Solidworks, Adobe Illustrator</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P3Page;
