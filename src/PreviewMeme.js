import React, { Component } from 'react';

class PreviewMeme extends Component {

    render = () => <div>

        <div>
            <h1>Preview Meme<br />#{this.props.memeObj.id}: {this.props.memeObj.name}</h1>
        </div>

        <div>
            <img src={this.props.memeObj.url} />
        </div>

        <form>
            <input type="text"
                name="topText"
                placeholder="Top text"
                value={this.props.memeObj.topText}
                onChange={event => this.props.handleChange(this.props.memeObj, event)}
            />
            <input type="text"
                name="bottomText"
                placeholder="Bottom text"
                value={this.props.memeObj.bottomText}
                onChange={event => this.props.handleChange(this.props.memeObj, event)}
            />
        </form>

        <button onClick={() => this.props.handleAddClick(this.props.memeObj)}>Add To Meme List</button>
        <button onClick={this.props.handleCancelClick}>Cancel</button>

    </div>

}

export default PreviewMeme;