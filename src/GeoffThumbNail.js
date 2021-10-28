import React, { Component } from "react";

class GeoffThumbNail extends Component {
  render = () => <div>
    <hr />
    <h3>{this.props.memeObj.name} / {this.props.memeObj.id}</h3>
    <p>Top Text: {this.props.memeObj.topText}</p>
    <p>Bottom Text: {this.props.memeObj.bottomText}</p>
    <button onClick={() => this.props.renderEditViewMeme(this.props.memeObj)}>View / Edit Meme</button>&nbsp;&nbsp;&nbsp;
    <button onClick={() => this.props.removeMemeFromList(this.props.memeObj.id)}>Remove Meme From List</button>
  </div>
}

export default GeoffThumbNail;