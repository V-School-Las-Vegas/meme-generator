import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class MemeCard extends Component {

    render = () => <div>
        {this.props.x.name}<br/>
        {this.props.x.id}<br/>
        {this.props.x.url}<br/>
        {this.props.x.width}<br/>
        {this.props.x.height}<br/>
        {this.props.x.box_count}<br/>
        {this.props.x.topText}<br/>
        {this.props.x.bottomText}<br/>
        {String(this.props.x.added)}<hr/>
    </div>

}

export default MemeCard;