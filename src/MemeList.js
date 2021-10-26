import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ThumbNail from './ThumbNail';


class MemeList extends Component {

    render = () => <>
        <h1>Meme List</h1>
        {this.props.memes
        .filter(meme => meme.added)
        .map((meme, i) => <ThumbNail
            key={i}
            id={i}
            memeObj={meme}
            handleChange={this.props.handleChange}
            handleSubmitClick={this.props.handleSubmitClick}
        />)}
    </>

}

export default MemeList;