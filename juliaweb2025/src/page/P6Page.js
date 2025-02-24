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


class P6Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2023 Dec",
      award: "Independent Project",
      title: "Waterlover",
      team: "[Team Project by a 1-Person Team]",
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

            <img src="/P6/waterlover_img.jpg" width="49%" />
            <div className="gap_w"></div>
            <img src="/P6/waterlover_img2.jpg" width="49%" />

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Develop a Water-Saving Device to Recycle and Reuse Water Efficiently. "</h2>
            </div>

            <div className="gap_h"></div>

            <video width="100%" controls>
              <source src="/P6/waterlover.mov" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P6/1.png">[Poster]</a><a href="/P6/2.png">[Poster]</a><a href="/P6/3.png">[Poster]</a><a href="/P6/4.png">[Poster]</a></p>
              <h4>Project Type</h4>
              <p>#Product Design #Environmental Water Conservation #Mechanical Control</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Product Design Modeling, Product Implementation and Testing</p>
              <h4>Skills</h4>
              <p>Solidworks, Adobe Illustrator</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P6Page;
