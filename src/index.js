import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MemeCard from './MemCard'
// import './index.css';

const axios = require("axios");

class RootComponent extends Component {
    state = {
        isLoading: true,
        memes: []
    };

    componentDidMount() {
        setTimeout(() => {
            axios
                .get('https://api.imgflip.com/get_memes')
                .then(res => {
                    const memes = JSON.parse(JSON.stringify(res.data.data.memes));
                    memes.forEach(meme => {
                        meme.topText = 'test top text';
                        meme.bottomText = 'test bottom text';
                        meme.added = false;
                    });
                    this.setState({ memes: memes });
                    this.setState({ isLoading: false })
                })
                .catch(err => alert(err))
        }, 1000)
    }

    render = () =>
        <>
            {this.state.isLoading
                ? <h1 id='loading'>Loading...</h1>
                : this.state.memes.map((meme, i) => <MemeCard key={i} memeObj={meme} />)
            }
        </>
}

ReactDOM.render(<RootComponent />, document.getElementById('root-container'));