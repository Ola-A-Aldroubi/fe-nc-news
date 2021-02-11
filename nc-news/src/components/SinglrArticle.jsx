import React, { Component } from "react";
import * as api from "../api";
import Loader from "../components/Loader"
import { Link } from "@reach/router";

class SinglrArticle extends Component {
    state = 
    {
        article:[],
        isLoading:true,
    };
    
  componentDidMount() {
      const{article_id} = this.props;
      this.fetchArticle(article_id);
  }
  fetchArticle(article_id){
    api.getArticleById(this.props.article_id).then((res) => {
        this.setState({ article :res, isLoading:false});
      });
  }
    render() {
        const {isLoading}=this.state;
        if(isLoading) return <Loader />;
        const {article}=this.state;
        return (
            <main  className="single_article">
                <h3>{article[0].title}</h3>   <h4>written by : {article[0].author}</h4>  
                <p>{article[0].body}</p>
                <p>comments:{article[0].comment_count}</p>
                <p>votes:{article[0].votes}</p>    
 
            </main>        );
    }
}

export default SinglrArticle;
