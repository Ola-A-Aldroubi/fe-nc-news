import React, { Component } from 'react';
import * as api from "../api"

class CommentsAdder extends Component {
    state={
        comment:''
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {newComment}=this.props;
        const {comment}=this.state
        const{article_id}=this.props;
        const username='butter_bridge';
        api.postComment(username,article_id,comment).then((comment)=>{
            newComment(comment);
        })
    }
    handleInput=(event)=>{
        this.setState({comment:event.target.value});
    }
    render() {
        const {comment}=this.state;
        return (
            <form className="commentAdder" onSubmit={this.handleSubmit}>
                <label>add a comment</label>
                <input type="text"  id="comment" onChange={this.handleInput}></input>
                <button type="submit">add</button>

                
            </form>
        );
    }
}

export default CommentsAdder;
