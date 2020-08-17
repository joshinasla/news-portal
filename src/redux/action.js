export const updateTopStories = (payload) => {
  console.log("actionrenders");
  return {
    type: "UPDATE_TOP_STORIES",
    payload,
  };
};
export const updateItemDetails = (itemDetails) => {
  console.log("itemrenders");
  return {
    type: "UPDATE_ITEM_DETAILS",
    itemDetails: itemDetails,
  };
};
export const updateBestStories = (payload) => {
  console.log("beststory");
  return {
    type: "UPDATE_BEST_STORIES",
    payload,
  };
};
export const updateNewStories = (payload) => {
  console.log("newstory");
  return {
    type: "UPDATE_NEW_STORIES",
    payload,
  };
};
