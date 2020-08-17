import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBestStories } from "../redux/action";
import SingleItem from "../components/SingleItem";

class BestStories extends Component {
  componentWillMount() {
    const bestStoriesUrl =
      "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty";
    fetch(bestStoriesUrl)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((bestStorie) => {
        var bestStories = bestStorie.slice(0, 5);
        console.log("djsahdash", { bestStories });
        this.props.updateBestStories(bestStories);
      });
  }
  render() {
    const bestStories = this.props.bestStories;
    console.log("hello", this.props);
    return (
      <div>
        {bestStories.map((storyID) => (
          <SingleItem id={storyID} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    updateBestStories: (bestStories) =>
      dispatch(updateBestStories(bestStories)),
  };
};
const mapStateToProps = (state) => {
  console.log("mapstatetoProps", state.bestStories);
  return {
    bestStories: state.bestStories,
  };
};
const ReduxBestStories = connect(
  mapStateToProps,
  mapDispatchToProps
)(BestStories);

export default ReduxBestStories;
