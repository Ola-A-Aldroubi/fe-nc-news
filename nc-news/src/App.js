import "./App.css";
import Nav from "./components/Nav";
import Title from "./components/Title";
import { Router } from "@reach/router";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div className="App">
      <Title />
      <Nav />
      <ArticlesList />
    </div>
  );
}

export default App;
