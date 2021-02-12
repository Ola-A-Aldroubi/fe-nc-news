import "./App.css";
import Nav from "./components/Nav";
import Title from "./components/Title";
import { Router } from "@reach/router";
import SingleArticle from "./components/SinglrArticle";
import ArticlesList from "./components/ArticlesList";
import Sort from "./components/Sort";

function App() {
    return ( < div className = "App" >
        <
        Title / >
        <
        Nav / >
        <
        Router >
        <
        ArticlesList path = "/" / >
        <
        ArticlesList path = "/:topic" / >
        <
        SingleArticle path = "/article/:article_id" / >

        <
        /Router >  </div >
    );
}

export default App;