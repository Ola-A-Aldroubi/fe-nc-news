import React from 'react';

const CommentCard = ({author,body,votes}) => {
    return (
        <div className="commentCard">
           <p>By : {author}</p>
            <p> {body}</p>
            <p>votes :{votes}</p>         
        </div>
    );
}

export default CommentCard;
