import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class MemeCard extends Component {

    render() {
        return (
            <div className="meme-card">
                <div className="image">
                    <img src={this.props.memeObj.url} alt={this.props.memeObj.name} />
                </div>

                <div className="text-form">
                    <form>
                        <input type="text"
                            name="topText"
                            placeholder="Top text"
                            value={this.props.memeObj.topText}
                            onChange={(event) => this.props.handleChange(this.props.id, event)}
                            />
                        <input type="text"
                            name="bottomText"
                            placeholder="Bottom text"
                            value={this.props.memeObj.bottomText}
                            onChange={(event) => this.props.handleChange(this.props.id, event)}
                        />
                    </form>
                </div>

                <div>
                    <button onClick={this.props.handleRejectClick}>Refresh Meme</button>
                </div>

                <div className="submit-btn">
                    <button onClick={() => this.props.handleSubmitClick(this.props.id)}>Submit</button>
                </div>

                <div className="cancel-btn">
                    <button onClick={this.props.handleCancelClick}>cancel</button>
                </div>

            </div>
        )
    }
}

export default MemeCard;