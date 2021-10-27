import React, { Component } from 'react';
import "./MemeCard.css"

class AddNewMeme extends Component {

    state = {
        currMemeNdx: this.props.memes.findIndex(meme => !meme.added)
    };

    handleNextMemeClick = () => this.setState({ currMemeNdx: this.props.memes.findIndex((meme, i) => (!meme.added && i > this.state.currMemeNdx)) });
    

    render = () =>
        <div className="meme-card">
            <h1>Add This Meme?<br />#{this.state.currMemeNdx}: {this.props.memes[this.state.currMemeNdx].name}</h1>

            <div>
                <button onClick={this.handleNextMemeClick}>Next Meme</button>
            </div>

            <div className="submit-btn-div">
                <button className="submit-btn" onClick={() => this.props.handleSubmitClick(this.state.currMemeNdx)}>Submit</button>
            </div>

            <div className="cancel-btn-div">
                <button className="cancel-btn" onClick={this.props.handleCancelClick}>Cancel</button>
            </div>

            <div className="image-div">
                <img className="image" src={this.props.memes[this.state.currMemeNdx].url} />
            </div>

            <div className="text-form">
                <form>
                    <input type="text"
                        name="topText"
                        placeholder="Top text"
                        value={this.props.memes[this.state.currMemeNdx].topText}
                        onChange={event => this.props.handleChange(this.state.currMemeNdx, event)}
                    />
                    <input type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={this.props.memes[this.state.currMemeNdx].bottomText}
                        onChange={event => this.props.handleChange(this.state.currMemeNdx, event)}
                    />
                </form>
            </div>

        </div>
}

export default AddNewMeme;