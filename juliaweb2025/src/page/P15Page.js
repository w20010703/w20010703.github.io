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


class P15Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Feb",
      award: "Cornell AI Hackathon",
      title: "ThinkBit",
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
              <source src="/P15/main.mp4" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might children and teachers leverage AI Storytelling resources and a physical learning objects to conduct playful learning? "</h2>
            </div>

            <div className="gap_h"></div>

            <video width="100%" controls>
              <source src="/P15/UI.mov" type="video/mp4" />
            </video>

            <div className="gap_h"></div>

            <iframe width="49%" height="300px" src="https://www.youtube.com/embed/1E3aje04Bjo?si=Q1nD2jIZ8LhtGjOT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="300px" src="https://www.youtube.com/embed/VukO05sDp5o?si=-xtwEPmwf-HqW7FE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <img src="/P15/2.jpeg" width="49%" />
            <div className="gap_w"></div>
            <img src="/P15/3.jpeg" width="49%" />

            <div className="gap_h"></div>

            <img src="/P15/5.jpeg" width="49%" />
            <div className="gap_w"></div>
            <img src="/P15/4.jpeg" width="49%" />

            <div className="gap_h"></div>



            

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://docs.google.com/presentation/d/1WMHT6jgHAyWNPOj7m_bBYXJpRiDYx-rV_jG-B0XlnJs/edit?usp=sharing">[PPT]</a><a href="https://github.com/w20010703/ThinkBit.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#AI in Education #Storytelling AI #Interactive Learning</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Software Development</p>
              <h4>Skills</h4>
              <p>Python, OpenAI RAG, AI Agent, Flask, Adobe Illustrator</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P15Page;
