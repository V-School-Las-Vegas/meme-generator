import React, { Component } from 'react';

class GeoffEditViewMeme extends Component {

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

    render = () => <div>

        <div>
            <h1>Geoff Edit View Meme</h1>
            <h3>#{this.state.currMeme.id}: {this.state.currMeme.name}</h3>
        </div>

        <button onClick={this.prevmemeList}>Prev Meme in List</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.nextmemeList}>Next Meme in List</button><br /><br />
        <button onClick={()=> this.props.updateListMeme(this.state.currMeme)}>Update This Meme</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.removeMemeFromList}>Remove This Meme</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.props.renderMemeList}>View My Meme List</button><br/><br />


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

export default GeoffEditViewMeme;