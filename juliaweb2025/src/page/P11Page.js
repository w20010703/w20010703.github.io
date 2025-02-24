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


class P11Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2019 Summer",
      award: "Google Science Fair 2019 Finalist",
      title: "Smart Necklace",
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
              <source src="/P11/Google Science Fair -- Smart Necklace.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might we design a smart necklace that enhances health by monitoring hydration levels, providing a stylish alternative to traditional smart water bottles for tracking water intake? "</h2>
            </div>

            <div className="gap_h"></div>

            <video width="40%" controls>
              <source src="/P11/gsf_video.mp4" type="video/mp4" />
            </video>

            <div className="gap_w"></div>
            <div className="gap_w"></div>

            <video width="56%" controls>
              <source src="/P11/gsf_contribution.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <img src="/P11/_p11_pic.jpg" width="100%" />

          
            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://docs.google.com/presentation/d/1FmLTAJ5TMB0qiKdy2n2fswOoE-WocK5iQPqc6sQT_m4/edit?usp=sharing">[PPT]</a><a href="https://github.com/w20010703/smartnecklace.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#Wearable Innovation #CNN Machine Learning #Piezoelectric Sensors</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Product Design, Software Development, Hardware Engineering, Product Implementation, and Testing</p>
              <h4>Skills</h4>
              <p>Python, TensorFlow, OpenCV, Piezoelectric Sensor, STM32</p>
            </div>


          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P11Page;
