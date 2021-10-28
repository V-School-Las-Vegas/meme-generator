import React, { Component } from 'react';
import "./MemeCard.css";

class AddNewMeme extends Component {
    state = {
        currMemeNdx: 0
    };

    nextUnAddedMeme = () => {
        const x = this.props.memes.findIndex((meme, i) => (!meme.added && i > this.state.currMemeNdx));
    }
    
    handleNextMemeClick = () => {
        this.setState({ currMemeNdx: this.state.currMemeNdx + 1 });
        const x = this.props.memes.findIndex((meme, i) => (!meme.added && i > this.state.currMemeNdx));
        this.setState({ currMemeNdx: x });
    }

    render = () =>
        <div className="meme-card">
            <h1>Add New Meme</h1>

            <div className="refresh-btn-div">
                <button className="refresh-btn" onClick={this.handleNextMemeClick}>Next Meme</button>
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
                        onChange={(event) => this.props.handleChange(this.state.currMemeNdx, event)}
                    />
                    <input type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={this.props.memes[this.state.currMemeNdx].bottomText}
                        onChange={(event) => this.props.handleChange(this.state.currMemeNdx, event)}
                    />
                </form>
            </div>

        </div>
}

export default AddNewMeme;