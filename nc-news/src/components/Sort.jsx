import React, { Component } from "react";
import { Link } from "@reach/router";

class Sort extends Component {
  state = {
    value: "",
    list: [],
  };
  componentDidMount() {
    this.setState({ list: this.props });
    console.log("HI");
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };
  sort = (list) => { return list.sort((a, b) =>
    a.comments_count > b.comments_count
      ? 1
      : a.comments_count === b.comments_count
      ? a.comments_count > b.comments_count
        ? 1
        : -1
      : -1
  ) }
  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="date created">created</option>
        <option value="comments_count">comments_count</option>
        <option value="votes">votes</option>
      </select>
    );
  }
}

export default Sort;
