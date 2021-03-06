import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./AddNewMeme.css";
import AddNewMeme from './AddNewMeme';
import EditViewMeme from './EditViewMeme';
import ThumbNail from './ThumbNail.js';

const axios = require("axios");

class RootComponent extends Component {
    state = {
        mode: 'Loading',
        memePool: [],
        memeList: [],
        initMemeListId: 0
    };

    componentDidMount() {
        setTimeout(() => {
            axios
                .get('https://api.imgflip.com/get_memes')
                .then(res => {
                    const memePoolFromApi = JSON.parse(JSON.stringify(res.data.data.memes));
                    memePoolFromApi.forEach((meme, i) => {
                        meme.key = meme.id;
                        meme.id = i;
                        meme.topText = '';
                        meme.bottomText = '';
                    });
                    this.setState({
                        mode: 'AddNewMeme',
                        memePool: memePoolFromApi
                    })
                })
                .catch(err => alert(err))
        }, 1000)
    }

    // addMemeToList = (meme) => {
    //     const tempArr = JSON.parse(JSON.stringify(this.state.memeList));
    //     tempArr.push(JSON.parse(JSON.stringify(meme)));
    //     tempArr.forEach((meme, i) => meme.id = i);
    //     this.setState({ memeList: tempArr });
    // }

    addMemeToList = (meme) => {
        this.setState(prevState => ({ memeList: [...prevState.memeList, meme] }));
        this.setState(prevState => ({ memeList: prevState.memeList.map((obj, i) => ({ ...obj, id: i })) }))
    }

    renderMemeList = () => this.setState({ mode: 'MemeList' });

    renderAddNewMeme = () => this.setState({ mode: 'AddNewMeme' });

    renderEditViewMeme = (meme) => this.setState({
        initMemeListId: meme.id,
        mode: 'EditViewMeme'
    });

    // updateListMeme = (meme) => {
    //     const tempArr = JSON.parse(JSON.stringify(this.state.memeList));
    //     tempArr[meme.id] = meme;
    //     this.setState({ memeList: tempArr });
    // }

    updateListMeme = (meme) => this.setState(prevState => ({ memeList: prevState.memeList.map(obj => (meme.id === obj.id ? meme : obj)) }))

    // removeMemeFromList = (id) => {
    //     const tempArr = JSON.parse(JSON.stringify(this.state.memeList));
    //     const remNdx = tempArr.findIndex(meme => meme.id === id);
    //     tempArr.splice(remNdx, 1);
    //     this.setState({ memeList: tempArr });
    // }

    removeMemeFromList = (i) => {
        this.setState(prevState => ({ memeList: prevState.memeList.filter(obj => (obj.id != i)) }));
        this.setState(prevState => ({ memeList: prevState.memeList.map((obj, i) => ({ ...obj, id: i })) }));
    }


    render = () =>
        <>
            {this.state.mode === 'Loading' ? <h1>Loading...</h1> : ''}

            {this.state.mode === 'AddNewMeme' ? <AddNewMeme
                memePool={this.state.memePool}
                addMemeToList={this.addMemeToList}
                renderMemeList={this.renderMemeList}
            /> : ''}

            {this.state.mode === 'EditViewMeme' ? <EditViewMeme
                initMemeListId={this.state.initMemeListId}
                memeList={this.state.memeList}
                renderMemeList={this.renderMemeList}
                updateListMeme={this.updateListMeme}
                removeMemeFromList={this.removeMemeFromList}
                renderMemeList={this.renderMemeList}
            /> : ''}

            {this.state.mode === 'MemeList' ? <>
                <h1>Meme List</h1>
                <button className="add-new-meme-btn" onClick={this.renderAddNewMeme}><span>Add New Meme</span></button>
                {this.state.memeList
                    .map((meme, i) => <ThumbNail
                        key={i}
                        id={i}
                        memeObj={meme}
                        renderEditViewMeme={this.renderEditViewMeme}
                        removeMemeFromList={this.removeMemeFromList}
                    />)}
            </> : ''}

        </>
}

ReactDOM.render(<RootComponent />, document.getElementById('root-container'));