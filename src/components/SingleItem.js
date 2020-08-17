import React, { Component } from "react";
import { connect } from "react-redux";

import { updateItemDetails } from "../redux/action";

import "./SingleItem.css";

class SingleItem extends Component {
  constructor(state) {
    super(state);

    this.state = { singleItem: {} };
  }

  componentWillMount() {
    const itemID = this.props.id;
    const filteredData = this.props.itemDetails.filter(
      (item) => item.id !== itemID
    );
    if (filteredData.length === 1) {
      this.setState({
        singleItem: filteredData,
      });
    } else {
      const itemDetailsUrl = `https://hacker-news.firebaseio.com/v0/item/${itemID}.json?print=pretty`;
      fetch(itemDetailsUrl)
        .then((res) => {
          console.log({ res });
          return res.json();
        })
        .then((itemDetails) => {
          console.log({ itemDetails });
          this.props.updateItemDetails(itemDetails);
          this.setState({
            singleItem: itemDetails,
          });
        });
    }
  }
  render() {
    const itemList = this.props.itemDetails;
    console.log(itemList);
    return (
      <div className="container">
        {/* {itemList.map((itemList) => (
          <p>
            {itemList.id}
            {itemList.title}
          </p>
        ))} */}
        <div className="title">{this.state.singleItem.title}</div>
        <div className="author">By {this.state.singleItem.by}</div>
        <a className="btn" href={this.state.singleItem.url}>
          Details
        </a>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    updateItemDetails: (itemDetails) =>
      dispatch(updateItemDetails(itemDetails)),
  };
};
const mapStateToProps = (state) => {
  console.log("itemDetail", state.itemDetails);
  return {
    itemDetails: state.itemDetails,
  };
};
const ReduxSingleItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleItem);
export default ReduxSingleItem;
