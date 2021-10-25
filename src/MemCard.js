import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class MemeCard extends Component {



    handleClicked(){
        
    }

    render(props){
        return(
            <div className="meme-card">
                <div className="image">
                    <img src={this.props.x.url} alt={this.props.x.name}/>
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
                        <button>Refresh Meme</button>
                    </div>

                    <div className="submit-btn">
                        <button onClick={this.handleClicked}>Submit</button>
                    </div>

                    <div className="cancel-btn">
                        <button onClick={this.handleClicked}>cancel</button>
                    </div>

</div>
        )
    }   


}

export default MemeCard;