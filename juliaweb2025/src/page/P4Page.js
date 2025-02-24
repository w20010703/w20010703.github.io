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


class P4Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2023 Sep",
      award: "Independent Project",
      title: "Sipai Website",
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
            <video width="100%" controls>
              <source src="/P4/sipai_dance_demo.mov" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Providing a soothing and adorable platform to heal your every day. "</h2>
            </div>

            <div className="gap_h"></div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr", /* Three equal columns */
                gridTemplateRows: "auto auto", /* Two rows */
                gap: "10px", /* Adjust the gap as needed */
                width: "100%"
              }}>
              <img src="/P4/Sipai_web_final-01.png" style={{ gridColumn: "1", gridRow: "1/5", width: "100%" }} />
              <img src="/P4/Sipai_web_final-02.png" style={{ gridColumn: "2", gridRow: "1", width: "100%" }} />
              <img src="/P4/Sipai_web_final-03.png" style={{ gridColumn: "3", gridRow: "1", width: "100%" }} />
              <img src="/P4/Sipai_web_final-04.png" style={{ gridColumn: "2", gridRow: "2", width: "100%" }} />
              <img src="/P4/Sipai_web_final-05.png" style={{ gridColumn: "3", gridRow: "2", width: "100%" }} />
              <video width="100%" controls style={{ padding: "50px 0", gridColumn: "2/4", gridRow: "3", width: "100%" }} >
                <source src="/P4/sipai.mov" type="video/mp4" />
              </video>
            </div>

            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="http://sipai.co">[Website]</a><a href="/P4/1.png">[Poster]</a><a href="/P4/2.png">[Poster]</a><a href="/P4/3.png">[Poster]</a><a href="/P4/4.png">[Poster]</a><a href="https://github.com/w20010703/sipai_website.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#WebDesign #Healing #Always Dancing</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Web Design, Web Development, Animation Creation</p>
              <h4>Skills</h4>
              <p>React.js, Adobe Character Animator, Adobe Illustrator</p>
            </div>
            
          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P4Page;
