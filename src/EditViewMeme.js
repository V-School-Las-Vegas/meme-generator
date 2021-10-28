import React, { Component } from 'react';
import "./EditViewMeme.css";

class EditViewMeme extends Component {

  state = {
    currmemeListNdx: this.props.initMemeListId,
    currMeme: this.props.memeList[this.props.initMemeListId]
  };

  nextmemeList = () => {
    let nextId = Math.min(this.state.currmemeListNdx + 1, this.props.memeList.length - 1);
    this.setState({
      currmemeListNdx: nextId,
      currMeme: this.props.memeList[nextId]
    });
  }

  prevmemeList = () => {
    let nextId = Math.max(this.state.currmemeListNdx - 1, 0);
    this.setState({
      currmemeListNdx: nextId,
      currMeme: this.props.memeList[nextId]
    });
  }

  handleChange = ({ target: { name, value } }) => this.setState({ currMeme: { ...this.state.currMeme, [name]: value } });

  addMemeToList = () => {
    this.props.addMemeToList(this.state.currMeme);
    this.setState({ currMeme: { ...this.state.currMeme, topText: '', bottomText: '' } });
  }

  removeMemeFromList = () => {
    this.props.removeMemeFromList(this.state.currMeme.id);
    this.props.renderMemeList();
  }

  render = () => <div className="meme-card">

    <div className="meme-header">
      <h1>Edit View Meme</h1>
      <h3>Meme List #{this.state.currMeme.id}: {this.state.currMeme.name}</h3>
    </div>

    <div className="image-div">
    <input  className="top-text-edit"
          type="text"
          name="topText"
          placeholder="Top text"
          value={this.state.currMeme.topText}
          onChange={event => this.handleChange(event)}
        />

      <img
        className="image-edit"
        src={this.state.currMeme.url}
        alt={this.state.currMeme.name}
      />
              <input className="bottom-text-edit"
          type="text"
          name="bottomText"
          placeholder="Bottom text"
          value={this.state.currMeme.bottomText}
          onChange={event => this.handleChange(event)}
        />
    </div>



    <div className="refresh-btn-div">
      <button className="refresh-btn" onClick={this.prevmemeList}>Prev Meme in Pool</button>&nbsp;&nbsp;&nbsp;
      <button className="refresh-btn" onClick={this.nextmemeList}>Next Meme in Pool</button>
    </div>

    <div className="submit-btn-div">
      <button className="submit-btn" onClick={() => this.props.updateListMeme(this.state.currMeme)}>Update This Meme</button>&nbsp;&nbsp;&nbsp;
      <button className="submit-btn" onClick={this.removeMemeFromList}>Remove This Meme</button>&nbsp;&nbsp;&nbsp;
    </div>

    <div className="cancel-btn-div">
      <button className="cancel-btn" onClick={this.props.renderMemeList}>View My Meme List</button>
    </div>

  </div>

}

export default EditViewMeme;