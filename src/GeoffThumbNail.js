import React, { Component } from "react";
import "./MemeCard.css";

class GeoffThumbNail extends Component {
  render = () => <div>
    <hr />
    <h3>{this.props.memeObj.name} / {this.props.memeObj.id}</h3>
    <p>Top Text: {this.props.memeObj.topText}</p>
    <p>Bottom Text: {this.props.memeObj.bottomText}</p>
    <button onClick={() => this.props.handlePreviewClick(this.props.memeObj)}>Preview Meme</button>
  </div>
}

export default GeoffThumbNail;