import React, { Component } from 'react';
import * as api from "../api";
import CommentCard from './CommentCard';
import CommentsAdder from './CommentsAdder';
import Loader from"./Loader"

class CommentsList extends Component {
    state={
        comments:[],
        isLoading:true
    }
    componentDidMount(){
        this.fetchComments();
    }

    fetchComments=()=>{
        const{article_id}=this.props.article_id;
        api.getCommentsByArticleId(article_id).then((comments)=>{
            this.setState({comments:comments,isLoading:false})
        })
    }
    newComment=(newComment) =>{
       this.setState((currentState)=>{
           return {comments:[newComment, ...currentState.comments]}
       })

    }

    render() {
        const {isLoading}=this.state;
        if(isLoading) return <Loader />;
        const {comments}=this.state
        const{article_id}=this.props.article_id;
        return (
           
            <div className="commentsList">
            <CommentsAdder article_id={article_id} newComment={this.newComment}/>
            {comments.map((comment)=>{
                console.log(comment.comment_id)
                    return <CommentCard key={comment.comment_id} {...comment} />
                })}
                
            </div>
        );
    }
}

export default CommentsList;

