import React, { Component } from "react";
import "./ThumbNail.css";

class ThumbNail extends Component {
  render(props) {
    return (
      <div className="meme-thumbnail">

        <div className="thumbnail-header">
          <h3>{this.props.memeObj.name} / {this.props.memeObj.id}</h3>
        </div>

        <div className="thumbnail-image-div">
          <img
            className="thumbnail-image"
            src={this.props.memeObj.url}
            alt={this.props.memeObj.name}
          />
        </div>

        <div className="thumbnail-text-display">
          <div className="top-text">
            <p>Top Text: {this.props.memeObj.topText}</p>
          </div>

          <br />

          <div className="bottom-text">
            <p>Bottom Text: {this.props.memeObj.bottomText}</p>
          </div>
        </div>

        <div className="preview-btn-div">
          <button
            className="preview-btn"
            onClick={this.props.handleRejectClick}
          >
            <span>preview</span>
          </button>
        </div>


        <div className="edit-btn-div">
          <button className="edit-btn" onClick={() => this.props.renderEditViewMeme(this.props.memeObj)}>
            <span>View / Edit Meme</span>
          </button>
        </div>

        <div className="delete-btn-div">
          <button className="delete-btn" onClick={() => this.props.removeMemeFromList(this.props.memeObj.id)}>
            <span>Remove Meme From List</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ThumbNail;