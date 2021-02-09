import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "../components/ArticleCard";
import Title from "./Title";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    api.getArticles().then((articles) => {
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <main className="list">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
