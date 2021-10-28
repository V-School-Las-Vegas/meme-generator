import React, { Component } from "react";
import "./ThumbNail.css";

// import ReactDOM from 'react-dom';

class ThumbNail extends Component {
  render(props) {
    return (
      <div className="meme-thumbnail">
        
        <div className="thumbnail-header">
          <h1>
            {this.props.memeObj.name} / {this.props.memeObj.id}
          </h1>
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
            <h2>top text</h2>
          </div>

          <br/>

          <div className="bottom-text">
            <h2>bottom text</h2>
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
          <button
            className="edit-btn"
            onClick={() => this.props.handleSubmitClick(this.props.id)}
          >
            <span>Edit</span>
          </button>
        </div>

        <div className="delete-btn-div">
          <button className="delete-btn" onClick={this.props.handleCancelClick}>
            <span>Delete</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ThumbNail;