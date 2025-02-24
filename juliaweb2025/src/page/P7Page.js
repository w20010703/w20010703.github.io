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


class P7Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2023 Nov",
      award: "Independent Project",
      title: "Carday",
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

            <img src="/P7/c2.png" width="100%" />

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Power Your Adventure: Innovative Parking Lot Designs for the Future of Park-and-Rest. "</h2>
            </div>

            <img src="/P7/c3.png" width="100%" />

            <div className="gap_h"></div>

            <img src="/P7/c1.png" width="49%" />
            <div className="gap_w"></div>
            <img src="/P7/c4.png" width="49%" />

            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P7/11.png">[Poster]</a><a href="/P7/22.png">[Poster]</a><a href="/P7/33.png">[Poster]</a><a href="/P7/44.png">[Poster]</a></p>
              <h4>Project Type</h4>
              <p>#Product Design #Parking Lot Design #Renewable energy</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Product Design Modeling, Overall Project Planning</p>
              <h4>Skills</h4>
              <p>Rhino, Adobe Illustrator</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P7Page;
