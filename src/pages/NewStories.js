import React, { Component } from "react";
import { connect } from "react-redux";
import { updateNewStories } from "../redux/action";
import SingleItem from "../components/SingleItem";

class NewStories extends Component {
  componentWillMount() {
    const newStoriesUrl =
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty";
    fetch(newStoriesUrl)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((topStorie) => {
        var newStories = topStorie.slice(0, 5);
        console.log("djsahdash", { newStories });
        this.props.updateNewStories(newStories);
      });
  }
  render() {
    const newStories = this.props.newStories;
    console.log("hello", this.props);
    return (
      <div>
        {newStories.map((storyID) => (
          <SingleItem id={storyID} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    updateNewStories: (newStories) => dispatch(updateNewStories(newStories)),
  };
};
const mapStateToProps = (state) => {
  console.log("mapstatetoProps", state.newStories);
  return {
    newStories: state.newStories,
  };
};
const ReduxNewStories = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStories);

export default ReduxNewStories;
