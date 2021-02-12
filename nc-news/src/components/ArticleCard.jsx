import React from "react";
import { Link } from "@reach/router";
import VotesUpdater from "./VotesUpdater";



const ArticleCard = ({ article_id,title, topic, votes, comments_count, author }) => {
  return (
    <div className="article_card">
      <Link to={`/article/${article_id}`}>
        <p>{title}</p>
      </Link>
      <p>author : {author}</p>
      <p>topic : {topic}</p>
      <p>comments:{comments_count}</p>
      <VotesUpdater votes={votes} id={article_id} />
    </div>
  );
};

export default ArticleCard;
