import React, { Component } from 'react';

class GeoffAddNewMeme extends Component {

    state = {
        currMemePoolNdx: 0,
        currMeme: this.props.memePool[0]
    };

    nextMemePool = () => {
        let nextId = Math.min(this.state.currMemePoolNdx + 1, this.props.memePool.length - 1);
        this.setState({
            currMemePoolNdx: nextId,
            currMeme: this.props.memePool[nextId]
        });
    }

    prevMemePool = () => {
        let nextId = Math.max(this.state.currMemePoolNdx - 1, 0);
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

    render = () => <div>

        <div>
            <h1>Geoff Add New Meme</h1>
            <h3>#{this.state.currMeme.id}: {this.state.currMeme.name}</h3>
        </div>

        <button onClick={this.prevMemePool}>Prev Meme in Pool</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.nextMemePool}>Next Meme in Pool</button><br /><br />
        <button onClick={this.addMemeToList}>Add To List as New Meme</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.props.renderMemeList}>View My Meme List</button><br /><br />

        <form>
            <input type="text"
                name="topText"
                placeholder="Top text"
                value={this.state.currMeme.topText}
                onChange={event => this.handleChange(event)}
            />
            <input type="text"
                name="bottomText"
                placeholder="Bottom text"
                value={this.state.currMeme.bottomText}
                onChange={event => this.handleChange(event)}
            />
        </form>

        <div>
            <img src={this.state.currMeme.url} alt="" />
        </div>

    </div>

}

export default GeoffAddNewMeme;