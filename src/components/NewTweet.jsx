import React, { Component } from 'react';
import { handleAddTweet } from '../actions/tweets';
import { connect } from 'react-redux';

class NewTweet extends Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        const text = e.target.value; 
        
        this.setState({text}); 
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        const { text, id } = this.state; 
        const { dispatch } = this.props; 

        dispatch(handleAddTweet(text, id)); 

        this.setState({text: ''});
    }

    render(){
        const { text } = this.state;
        const tweetLeft = 280 - text.length; 

        return(
            <div>
                <h3 className="center">Compose New Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea 
                        className="textarea" 
                        placeholder="What's happening?" 
                        value={text} 
                        onChange={this.handleChange}
                        maxLength={280}
                    />
                    {tweetLeft <= 100 && (
                        <div className="tweet-length">
                            {tweetLeft}
                        </div>
                    )}
                    <button className="btn" type="submit" disabled={text === ''}>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(NewTweet);