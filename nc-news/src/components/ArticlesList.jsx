import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "../components/ArticleCard";
import Sort from "../components/Sort";
import Title from "./Title";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticles(topic);
  }
  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (topic !== prevProps.topic) {
      this.fetchArticles(topic);
    }
  }

  fetchArticles(topic) {
    api.getArticles(topic).then((articles) => {
      this.setState({ articles: articles, isLoading: false });
      console.log(this.state.articles)
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <main className="list">
        <Sort />
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticlesList;
