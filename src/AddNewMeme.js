import React, { Component } from 'react';
import "./AddNewMeme.css";

class AddNewMeme extends Component {

  state = {
    currMemePoolNdx: 0,
    currMeme: this.props.memePool[0]
  };

  prevMemePool = () => {
    let nextId = Math.max(this.state.currMemePoolNdx - 1, 0);
    this.setState({
      currMemePoolNdx: nextId,
      currMeme: this.props.memePool[nextId]
    });
  }

  nextMemePool = () => {
    let nextId = Math.min(this.state.currMemePoolNdx + 1, this.props.memePool.length - 1);
    this.setState({
      currMemePoolNdx: nextId,
      currMeme: this.props.memePool[nextId]
    });
  }

  handleChange = ({ target: { name, value } }) => this.setState({ currMeme: { ...this.state.currMeme, [name]: value } });

  addMemeToList = () => {
    this.props.addMemeToList(this.state.currMeme);
    this.setState({ currMeme: { ...this.state.currMeme, topText: '', bottomText: '' } });
  }

  render = () => <div className="add-meme-card">

    <div className="add-meme-header">
      <h1>Add New Meme</h1>
      <h3>Meme Pool #{this.state.currMeme.id}: {this.state.currMeme.name}</h3>
    </div>

    <div className="image-add-div">
      <input  className="top-text-add"
            type="text"
            name="topText"
            placeholder="Top text"
            value={this.state.currMeme.topText}
            onChange={event => this.handleChange(event)}
          />
        <img
          className="image-add"
          src={this.state.currMeme.url}
          alt={this.state.currMeme.name}
        />
                <input className="bottom-text-add"
            type="text"
            name="bottomText"
            placeholder="Bottom text"
            value={this.state.currMeme.bottomText}
            onChange={event => this.handleChange(event)}
          />
    </div>


    <div className="refresh-btn-div">
      <button className="refresh-btn" onClick={this.prevMemePool}>Prev Meme in Pool</button>&nbsp;&nbsp;&nbsp;
      <button className="refresh-btn" onClick={this.nextMemePool}>Next Meme in Pool</button>
    </div>

    <div className="submit-btn-div">
      <button className="submit-btn" onClick={this.addMemeToList}>Add To List as New Meme</button>
    </div>

    <div className="cancel-btn-div">
      <button className="cancel-btn" onClick={this.props.renderMemeList}>View My Meme List</button>
    </div>

  </div>

}

export default AddNewMeme;