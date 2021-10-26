import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MemeCard from './GeoffMemeCard';


class MemeList extends Component {

    render = () => <>
        <h1>Meme List</h1>
        {this.props.memes
        .filter(meme => meme.added)
        .map((meme, i) => <MemeCard
            key={i}
            id={i}
            memeObj={meme}
            handleChange={this.props.handleChange}
            handleSubmitClick={this.props.handleSubmitClick}
        />)}
    </>

}

export default MemeList;