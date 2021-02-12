import React from 'react';
import VotesUpdater from "./VotesUpdater";

const CommentCard = ({comment_id,author,body,votes}) => {
    return (
        <div className="commentCard">
           <p>By : {author}</p>
            <p> {body}</p>
            <VotesUpdater element="comments" votes={votes} id={comment_id} />         
        </div>
    );
}

export default CommentCard;
