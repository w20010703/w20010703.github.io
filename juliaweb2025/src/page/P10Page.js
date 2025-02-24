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


class P10Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2023 Summer",
      award: "Harvard Graduate School of Design",
      title: "Revitalizing Urban Life: A Mixed-Use Design Integrating Residential Zones with Piers Park",
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

            <img src="/P10/main.png" width="100%" />

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Integrate the Redesigned Town with Piers Park Through a Housing Design that Converts Residents' Daily Time Allocation into Spatial Proportions. "</h2>
            </div>

            <div className="gap_h"></div>

            <img src="/P10/c1.png" width="100%" />

            <div className="gap_h"></div>
            
            <img src="/P10/c2.png" width="100%" />

            <div className="gap_h"></div>

            <img src="/P10/1.jpg" width="23.5%" />
            <div className="gap_w"></div>
            <img src="/P10/2.jpg" width="23.5%" />
            <div className="gap_w"></div>
            <img src="/P10/3.jpg" width="23.5%" />
            <div className="gap_w"></div>
            <img src="/P10/4.jpg" width="23.5%" />

            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>
            <div className="gap_h"></div>

            <img src="/P10/r2.png" width="100%" />

            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P10/ppt.pdf">[PPT]</a><a href="/P10/site.png">[Site Portrait]</a><a href="/P10/DD23Cert.pdf">[Certificate]</a><a href="/P10/Julia_Chen.pdf">[Evaluation]</a></p>
              <h4>Project Type</h4>
              <p>#Resident Experience #City Planning #Urban Design #Housing Design</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Research & Site Analysis, Housing Design, Concept Development</p>
              <h4>Skills</h4>
              <p>Rhino, Laser Cutting, Adobe Illustrator</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P10Page;
