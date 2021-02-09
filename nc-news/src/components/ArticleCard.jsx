import React from "react";

const ArticleCard = ({ title, topic, votes, comments_count, author }) => {
  return (
    <section className="article_card">
      <h3>{title}</h3>
      <p>author : {author}</p>
      <p>topic : {topic}</p>
      <p>votes :{votes}</p>
      <p>comments:{comments_count}</p>
    </section>
  );
};

export default ArticleCard;
