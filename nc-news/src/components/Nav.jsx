import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class Nav extends Component {
  state = {
    topics: [],
  };

  fetchTopics() {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics } = this.state;
    return (
      <nav className="nav">
        {topics.map(({ slug }) => {
          return (
            <Link to={`/${slug}`} key={slug}>
              {slug}
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Nav;
