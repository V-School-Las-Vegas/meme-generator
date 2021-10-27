import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import MemeCard from './MemeCard'
import AddNewMeme from './AddNewMeme';
import PreviewMeme from './PreviewMeme';
// import ThumbNail from './ThumbNail';
import GeoffThumbNail from './GeoffThumbNail';

const axios = require("axios");

class RootComponent extends Component {
    state = {
        mode: 'Loading',
        currMeme: {},
        memes: [],
        memesList: []
    };

    componentDidMount() {
        setTimeout(() => {
            axios
                .get('https://api.imgflip.com/get_memes')
                .then(res => {
                    const memes = JSON.parse(JSON.stringify(res.data.data.memes));
                    memes.forEach((meme, i) => {
                        meme.key = meme.id;
                        meme.id = i;
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

    handleChangePreview = (meme, { target: { name, value } }) => {
        this.setState({ currMeme: { ...meme, [name]: value } });
    }

    handleAddPreview = (meme) => {
        const tempArr = JSON.parse(JSON.stringify(this.state.memesList));
        tempArr.push(meme);
        tempArr.forEach((meme, i) => meme.id = i);
        this.setState({ memesList: tempArr });
    }

    handleCancelPreview = () => this.setState({ mode: 'MemeList' });

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

    handlePreviewClick = (meme) => {
        this.setState({
            currMeme: meme,
            mode: 'PreviewMeme'
        });
    };

    test1 = () => this.setState({ mode: 'AddNewMeme' })

    test2 = () => this.setState({ mode: 'MemeList' })

    render = () =>
        <>
            <button onClick={this.test1}>Add New Meme</button>
            <button onClick={this.test2}>Show Meme List</button>

            {this.state.mode === 'Loading' ? <h1>Loading...</h1> : ''}

            {this.state.mode === 'AddNewMeme' ? <AddNewMeme
                memes={this.state.memes}
                handleChange={this.handleChange}
                handleSubmitClick={this.handleSubmitClick}
                handleCancelClick={this.handleCancelClick}
            /> : ''}

            {this.state.mode === 'PreviewMeme' ? <PreviewMeme
                memeObj={this.state.currMeme}
                handleChange={this.handleChangePreview}
                handleAddClick={this.handleAddPreview}
                handleCancelClick={this.handleCancelPreview}
            /> : ''}

            {this.state.mode === 'MemeList' ? <>
                <h1>Meme List</h1>
                {this.state.memes
                    .filter(meme => meme.added)
                    .map((meme, i) => <GeoffThumbNail
                        key={i}
                        id={i}
                        memeObj={meme}
                        handlePreviewClick={this.handlePreviewClick}
                    />)}
            </> : ''}

        </>
}

ReactDOM.render(<RootComponent />, document.getElementById('root-container'));