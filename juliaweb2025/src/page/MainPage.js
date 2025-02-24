import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link, Navigate } from 'react-router-dom';

import WorkCard from '../component/WorkCard'
// import Footer from '../components/Footer'
// import SlideShow from '../components/SlideShow'
// import PicWordWithBtn from '../components/PicWordWithBtn'

// import '../css/main_page.css';
// import { getDataFromServer, dict2urlEncode } from '../http_utils.js'
// import { setCookie, getCookie } from '../cookie_utils.js'


class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      introduction: ["Hello 👋", "I'm Julia", "Designer, Software Engineer and Entrepreneur"],
      project: [
      {
        "id":"1",
        "title":"Resilient Tensegrity Robot: Inspired by Spider Webs and Melons",
        "description":"Robotics & Structure Design",
        "imageSrc":"/images/p1_pic.jpg",
        "url":"/P1Page"
      },{
        "id":"2",
        "title":"Timber Tensegrity Chair",
        "description":"Robotics Fabrication & Design",
        "imageSrc":"/images/p2_pic.JPG",
        "url":"/P2Page"
      },{
        "id":"3",
        "title":"PCube",
        "description":"Product Design",
        "imageSrc":"/images/p3_pic.webp",
        "url":"/P3Page"
      },{
        "id":"15",
        "title":"ThinkBit",
        "description":"LLO & Product Design",
        "imageSrc":"/images/p15_pic.jpeg",
        "url":"/P15Page"
      },{
        "id":"8",
        "title":"MIXI",
        "description":"LLO & Product Design",
        "imageSrc":"/images/p8_pic.jpg",
        "url":"/P8Page"
      },{
        "id":"9",
        "title":"Curling Game",
        "description":"1D Game Design",
        "imageSrc":"/images/p9_pic.JPG",
        "url":"/P9Page"
      },{
        "id":"4",
        "title":"SIPAI Website",
        "description":"Web Design & Development",
        "imageSrc":"/images/p4_pic.webp",
        "url":"/P4Page"
      },{
        "id":"5",
        "title":"CrowdEye",
        "description":"Product Design & Machine Learning",
        "imageSrc":"/images/p5_pic.webp",
        "url":"/P5Page"
      },{
        "id":"6",
        "title":"WaterLover",
        "description":"Product Design & Development",
        "imageSrc":"/images/p6_pic.webp",
        "url":"/P6Page"
      },{
        "id":"7",
        "title":"CarDay",
        "description":"Product Design & Planning",
        "imageSrc":"/images/p7_pic.webp",
        "url":"/P7Page"
      },{
        "id":"10",
        "title":"Revitalizing Urban Life: A Mixed-Use Design Integrating Residential Zones with Piers Park",
        "description":"Urban Planning & Design",
        "imageSrc":"/images/p10_pic.png",
        "url":"/P10Page"
      },{
        "id":"11",
        "title":"Smart Necklace",
        "description":"ML & MCU",
        "imageSrc":"/images/p11_pic.jpg",
        "url":"/P11Page"
      },{
        "id":"12",
        "title":"A Wearable Mild Traumatic Injury Warning Device of Daily Activities",
        "description":"ML & MCU",
        "imageSrc":"/images/p12_pic.gif",
        "url":"/P12Page"
      },{
        "id":"13",
        "title":"Gong-pig",
        "description":"Game & Web Development",
        "imageSrc":"/images/p13_pic.png",
        "url":"/P13Page"
      },{
        "id":"14",
        "title":"DoDay Store Design",
        "description":"Brand & Interior Design",
        "imageSrc":"/images/p14_pic.jpg",
        "url":"/P14Page"
      }]
    }


    // this.general_switch_page = this.general_switch_page.bind(this)

  }


  render() { 
    return (
      <>
        <div className="title_section">
          {this.state.introduction.map((title, index) => <h2 key={index} className="main_title">{title}</h2>)}
        </div>
        
        <div className="work_section" id="project">
          <h2 className="work_title">Work.</h2>
          <div className="work_card_section">
            {this.state.project.map((item, index) => <WorkCard _id={item.id} key={index} onClick={() => {return this.general_switch_page(item.url, "")}} title={item.title} description={item.description} imageSrc={item.imageSrc} url={item.url} />)}
          </div>
        </div>

        <div className="about_section">
          <h2 className="about_title">About.</h2>

          <div className="about_section_content" id="about">
            <div style={{display: "flex", gap: "2%"}} ><img src="/images/julia.jpg" width="20%" /><img src="/images/nexuni.jpg" width="20%" /><img src="/images/cornell.png" width="20%" /></div>

            <p>Hello, I’m Weiching Chen! I am currently pursuing an M.S. in Design Technology at Cornell University, advised by Daniel Leithinger at the AAP Department. My academic background includes a B.S. in Electrical Engineering from National Taiwan University, where my capstone projects and research were centered around AIoT, web connectivity, and robotics.
              <br /><br />
              I am passionate about hands-on work that allows me to bring my innovative ideas to life, tackling real-world challenges. During my undergraduate studies, I co-founded <a href="https://www.nexuni.com" style={{fontWeight: "600"}}>Nexuni Co. Ltd.</a>, with the vision to develop affordable and intelligent automation solutions that enhance business management and improve the quality of life in urban environments.
              <br /><br />
              My time at Cornell has been instrumental in building a solid theoretical foundation in design technology integrated with practical applications in AI and systems. Starting Nexuni gave me invaluable experience in rapid prototyping and leveraging these developments in the automation of food, parking, and semiconductor industries. My current research involves developing smart systems like an interactive coffee machine that not only optimizes user experience but also provides actionable insights through data.
              <br /><br />
              I am committed to using my knowledge and skills to continue impacting the world positively. You can reach me at <a href="mailto:wc683@cornell.edu" style={{fontWeight: "600"}}>wc683@cornell.edu</a> or via <a href="https://www.nexuni.com" style={{fontWeight: "600"}}>LinkedIn</a>.</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p className="copyright">©2025 - Weiching (Julia) Chen. All rights reserved.</p>
      </>
    )
  }
      
}

export default MainPage;
