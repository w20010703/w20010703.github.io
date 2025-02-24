import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: "Weiching (Julia) Chen",
        subtitle: ["Work", "About", "Resume", "Contact"],
        url: ["/MainPage#project", "/MainPage#about", "/cv.pdf", "mailto:wc683@cornell.edu"]
      }
    }
    
    render() {
        return (
            <div className="main_header">
                <h2 className="main_header_title"><a href="/MainPage">{this.state.title}</a></h2>
                <div className="main_header_item_holder">
                {this.state.subtitle.map((item, index) => {
                    return (
                        
                            <div key={index} className="main_header_item">
                            {console.log(this.state.url[index])}
                                <a href={this.state.url[index]}><h3>{this.state.subtitle[index]}</h3></a>
                                
                            </div>
                    )
                })}
                </div>
            </div>
        );
    }
}

export default Header;