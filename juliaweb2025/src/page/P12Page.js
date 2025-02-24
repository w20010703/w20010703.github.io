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


class P12Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2017 Nov - 2018 May",
      award: "Taiwan International Science Fair (Sliver Award), Canada Worldwide Science Fair (Gold Award)",
      title: "A Wearable Mild Traumatic Injury Warning Device of Daily Activities",
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
              <source src="/P12/quick.mov" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might we develop a wearable device that detects and evaluates the effects of multiple impacts to better prevent mild traumatic brain injuries? "</h2>
            </div>

            <div className="gap_h"></div>

            
            
            

            


            <div className="gap_h"></div>


            <div style={{
                display: "grid",
                gridTemplateColumns: "0.65fr 1fr 1fr", /* Three equal columns */
                gridTemplateRows: "auto auto", /* Two rows */
                gap: "10px", /* Adjust the gap as needed */
                width: "100%"
              }}>

              <video width="17.5%" controls  style={{ gridColumn: "1", gridRow: "1/3", width: "100%" }} >
                <source src="/P12/final.mov" type="video/mp4" />
              </video>

              <video width="50%" controls style={{ gridColumn: "2", gridRow: "1", width: "100%" }} >
                <source src="/P12/d1.mp4" type="video/mp4" />
              </video>

              <video width="50%" controls style={{ gridColumn: "3", gridRow: "1", width: "100%" }} >
                <source src="/P12/d2.mp4" type="video/mp4" />
              </video>

              <video width="50%" controls style={{ gridColumn: "2", gridRow: "2", width: "100%" }} >
                <source src="/P12/d3.mp4" type="video/mp4" />
              </video>

              <video width="50%" controls style={{ gridColumn: "3", gridRow: "2", width: "100%" }} >
                <source src="/P12/d4.mp4" type="video/mp4" />
              </video>
              
            </div>

            

            <div className="gap_h"></div>

            <img src="/P12/warning system.jpg" width="49%" />
            <div className="gap_w"></div>
            <img src="/P12/goldm.png" width="49%" />
            
            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/P12/poster_1_cwsf.png">[Poster]</a><a href="/P12/poster_2_cwsf.png">[Poster]</a><a href="/P12/report.pdf">[Report]</a><a href="/P12/report_chn.pdf">[Report (Chinese)]</a><a href="https://github.com/w20010703/mTBI_device.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#Wearable Innovation #Brain Injury Prevention #Rapid Data Collection</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Product Design, Software Development, Hardware Engineering, Product Implementation, and Testing</p>
              <h4>Skills</h4>
              <p>C++, G-Sensor, DMA Technique, STM32.</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P12Page;
