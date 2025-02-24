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


class P14Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2022 March",
      award: "nexuni",
      title: "DoDay Store Design",
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

            <img src="/P14/p1.jpg" width="100%" />

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Design our own dessert store, Doday, located within a department store. "</h2>
            </div>

            <div className="gap_h"></div>

            <img src="/P14/doday_nashan_0221.png" width="49%" />
            <div className="gap_w"></div>
            <img src="/P14/doday_nashan_0221-2.png" width="49%" />

            <div className="gap_h"></div>

            <img src="/P14/doday_nashan_0221-3.png" width="49%" />
            <div className="gap_w"></div>
            <img src="/P14/doday_nashan_0221-4.png" width="49%" />

            <div className="gap_h"></div>

            <img src="/P14/doday_nashan_0221-5.png" width="49%" />
            <div className="gap_w"></div>
            <img src="/P14/doday_nashan_0221-6.png" width="49%" />

            <div className="gap_h"></div>

            <img src="/P14/doday_nashan_0221-7.png" width="49%" />
            <div className="gap_w"></div>
            <img src="/P14/doday_nashan_0221-8.png" width="49%" />

            <div className="gap_h"></div>

            <img src="/P14/1.png" width="49%" />
            <div className="gap_w"></div>
            <img src="/P14/2.png" width="49%" />
            
            <div className="gap_h"></div>
            
            <img src="/P14/p3.jpg" width="49%" />
            <div className="gap_w"></div>
            <img src="/P14/p4.jpg" width="49%" />

            <div className="gap_h"></div>
            
            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://www.doday.com.tw">[DoDay Website]</a></p>
              <h4>Project Type</h4>
              <p>#Interior Design #Tech Dessert Store</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Store Design, and Modeling.</p>
              <h4>Skills</h4>
              <p>Sketchup</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P14Page;
