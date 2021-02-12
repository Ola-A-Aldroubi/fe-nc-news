import React, { Component } from 'react';
import * as api from "../api";
import CommentCard from './CommentCard';
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

    render() {
        const {isLoading}=this.state;
        if(isLoading) return <Loader />;
        const {comments}=this.state
        return (
            <div className="commentsList">
                {comments.map((comment)=>{
                    return <CommentCard key={comment.comment_id} {...comment} />
                })}
            </div>
        );
    }
}

export default CommentsList;

