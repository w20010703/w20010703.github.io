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
      date: "2020 Dec",
      award: "LINE FRESH 2020 - Sliver Award",
      title: "CrowdEye",
      team: "[Team Project by a 5-Person Team]",
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
              <source src="/P5/linefresh_demo_eng_sub.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Utilizing the power of community and artificial intelligence to help visu- ally impaired friends, making society full of love. "</h2>
            </div>

            <div className="gap_h"></div>

            <img src="/P5/p5_pic.webp" width="49%" />
            <div className="gap_w"></div>
            <img src="/P5/c1.jpg" width="49%" />

            <div className="gap_h"></div>

            <img src="/P5/c2.jpg" width="49%" />
            <div className="gap_w"></div>
            <video width="49%" controls>
              <source src="/P5/backend_server.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P5/p2.png">[Poster]</a><a href="/P5/p3.png">[Poster]</a><a href="/P5/p5.png">[Poster]</a><a href="/P5/p4.png">[Poster]</a></p>
              <h4>Project Type</h4>
              <p>#Product Design #Social Care #Front and Back End Integration #Machine Learning</p>
              <h4>Personal Contribution</h4>
              <p>Team Leader, Creative Idea, Product Report, Backend API Streaming</p>
              <h4>Skills</h4>
              <p>Python, AWS, CAT-SOOP, pgAdmin, SQL, Adobe Illustrator</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P1Page;
