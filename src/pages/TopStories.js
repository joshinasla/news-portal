import React, { Component } from "react";
import { connect } from "react-redux";

import { updateTopStories } from "../redux/action";

import SingleItem from "../components/SingleItem";

class TopStories extends Component {
  componentWillMount() {
    const topStoriesUrl =
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    fetch(topStoriesUrl)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((topStorie) => {
        var topStories = topStorie.slice(0, 200);
        console.log("djsahdash", { topStories });
        this.props.updateTopStories(topStories);
      });
  }
  render() {
    const topStories = this.props.topStories;
    console.log("hello", this.props);
    return (
      <div>
        {topStories.map((storyID) => (
          <SingleItem id={storyID} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    updateTopStories: (topStories) => dispatch(updateTopStories(topStories)),
  };
};
const mapStateToProps = (state) => {
  console.log("mapstatetoProps", state.topStories);
  return {
    topStories: state.topStories,
  };
};
const ReduxTopStories = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopStories);

export default ReduxTopStories;
