import React, { Component } from 'react';
import "./MemeCard.css"
// import ReactDOM from 'react-dom';

class MemeCard extends Component {





    render(props){
        return(
            <div className="meme-card">
                <div className="meme-header">
                    <h1>{this.props.memeObj.name} / {this.props.memeObj.id}</h1>
                </div>
                <div className="image-div">
                    <img className="image" src={this.props.memeObj.url} alt={this.props.memeObj.name}/>
                </div>

                    <div className="text-form">
                        <form>
                            <input type="text"
                                name="top-text"
                                placeholder="Top text"
                            />
                            <input type="text"
                                name="bottom-text"
                                placeholder="Bottom text"
                            />

                        </form>
                    </div>

                    <div className="refresh-btn-div" >  
                        <button className="refresh-btn" onClick={this.props.handleRejectClick}>Refresh Meme</button>
                    </div>

                    <div className="submit-btn-div">
                        <button className="submit-btn"onClick={this.props.handleSubmitClick}>Submit</button>
                    </div>

                    <div className="cancel-btn-div">
                        <button className="cancel-btn" onClick={this.props.handleCancelClick}>cancel</button>
                    </div>

</div>
        )
    }   


}

export default MemeCard;