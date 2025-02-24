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


class CVPage extends Component {

  constructor(props) {
    super(props);

  }

  render() { 
    return (
      <div className="ppage">
        <div className="title_section">
          
          <img src="/images/cv-01.png" width="100%" />
          <img src="/images/cv-02.png" width="100%" />
          
        </div>
        
      </div>
    )
  }
      
}

export default CVPage;
