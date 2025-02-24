import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class WorkCard extends Component {

    constructor(props) {
      super(props);
      this.state = {
        id: this.props._id,
        title: this.props.title,
        description: this.props.description,
        imageSrc: this.props.imageSrc,
        url: this.props.url
      }
    }
    
    render() {
        return (
            <Link to={this.state.url}>
                <div className="work_card">
                    <div className="work_card_img_holder">
                        <img src={this.state.imageSrc} />
                    </div>
                    <h4 className="work_card_title">{this.state.title}</h4>
                    <h5 className="work_card_description">{this.state.description}</h5>
                </div>
            </Link>
        );
    }
}

export default WorkCard;