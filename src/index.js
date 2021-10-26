import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MemeList from './MemeList';
import MemeCard from './GeoffMemeCard';
import AddNewMeme from './AddNewMeme';

const axios = require("axios");

class RootComponent extends Component {
    state = {
        mode: 'Loading',
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
                    this.setState({
                        mode: 'AddNewMeme',
                        memes: memes
                    })
                })
                .catch(err => alert(err))
        }, 1000)
    }

    handleChange = (id, { target: { name, value } }) => {
        const tempArr = JSON.parse(JSON.stringify(this.state.memes));
        tempArr[id] = { ...tempArr[id], [name]: value };
        this.setState({ memes: tempArr });
    }

    handleSubmitClick = (id) => {
        const tempArr = JSON.parse(JSON.stringify(this.state.memes));
        tempArr[id].added = true;
        this.setState({
            mode: 'MemeList',
            memes: tempArr
        });
    }

    handleCancelClick = () => this.setState({ mode: 'MemeList' });

    test1 = () => this.setState({ mode: 'AddNewMeme' })

    test2 = () => this.setState({ mode: 'MemeList' })

    test3 = () => this.setState({ mode: 'MemeCard' })

    render = () =>
        <>
            <button onClick={this.test1}>Add New Meme</button>
            <button onClick={this.test2}>Show Meme List</button>
            <button onClick={this.test3}>Show Meme Card</button>

            {this.state.mode === 'Loading' ? <h1>Loading...</h1> : ''}

            {this.state.mode === 'AddNewMeme' ? <AddNewMeme
                memes={this.state.memes}
                handleChange={this.handleChange}
                handleSubmitClick={this.handleSubmitClick}
                handleCancelClick={this.handleCancelClick}
            /> : ''}

            {this.state.mode === 'MemeList' ? <MemeList
                memes={this.state.memes}
                handleChange={this.handleChange}
                handleSubmitClick={this.handleSubmitClick}
            /> : ''}

            {this.state.mode === 'MemeCard' ? <h1>showNemCard...</h1> : ''}

        </>
}

ReactDOM.render(<RootComponent />, document.getElementById('root-container'));