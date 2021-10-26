import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MemeList from './MemeList';
import MemeCard from './MemCard';
import AddNewMeme from './AddNewMeme';

const axios = require("axios");

class RootComponent extends Component {
    state = {
        isLoading: true,
        showAddNemMeme: false,
        showMemeList: false,
        showNemCard: false,
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
                        isLoading: false,
                        showAddNemMeme: true,
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
        console.log('handleSubmitClick ');
        const tempArr = JSON.parse(JSON.stringify(this.state.memes));
        tempArr[id].added = true;
        this.setState({
            showAddNemMeme: false,
            showMemeList: true,
            showNemCard: false,
            memes: tempArr
        });
    }

    handleCancelClick = () => {
        this.setState({
            showAddNemMeme: false,
            showMemeList: true,
            showNemCard: false
        });
    }

    test1 = () => this.setState({
        isLoading: false,
        showAddNemMeme: true,
        showMemeList: false,
        showNemCard: false
    })

    test2 = () =>
        this.setState({
            isLoading: false,
            showAddNemMeme: false,
            showMemeList: true,
            showNemCard: false
        })

    test3 = () => this.setState({
        isLoading: false,
        showAddNemMeme: false,
        showMemeList: false,
        showNemCard: true
    })

    render = () =>
        <>
            {this.state.isLoading ? <h1>Loading...</h1> : ''}

            {this.state.showAddNemMeme ? <AddNewMeme
                memes={this.state.memes}
                handleChange={this.handleChange}
                handleSubmitClick={this.handleSubmitClick}
                handleCancelClick={this.handleCancelClick}
            /> : ''}

            {this.state.showMemeList ? <MemeList
                memes={this.state.memes}
                handleChange={this.handleChange}
                handleSubmitClick={this.handleSubmitClick}
            /> : ''}

            {this.state.showNemCard ? <h1>showNemCard...</h1> : ''}
            <button onClick={this.test1}>Add New Meme</button>
            <button onClick={this.test2}>Show Meme List</button>
            <button onClick={this.test3}>Show Meme Card</button>
        </>
}

ReactDOM.render(<RootComponent />, document.getElementById('root-container'));