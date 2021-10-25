import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class MemeCard extends Component {



    handleClicked(){
        
    }

    render(props){
        return(
            <div className="meme-card">
                <div className="image">
                    <img src={this.props.memeObj.url} alt={this.props.memeObj.name}/>
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

                    <div>  
                        <button onClick={this.props.handleRejectClick}>Refresh Meme</button>
                    </div>

                    <div className="submit-btn">
                        <button onClick={this.props.handleSubmitClick}>Submit</button>
                    </div>

                    <div className="cancel-btn">
                        <button onClick={this.props.handleCancelClick}>cancel</button>
                    </div>

</div>
        )
    }   


}

export default MemeCard;