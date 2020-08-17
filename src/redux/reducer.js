const initialState = {
  topStories: [],
  bestStories: [],
  newStories: [],
  itemDetails: [],
};
export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TOP_STORIES":
      return {
        ...state,
        topStories: action.payload,
      };
    case "UPDATE_BEST_STORIES":
      return {
        ...state,
        bestStories: action.payload,
      };
    case "UPDATE_NEW_STORIES":
      return {
        ...state,
        newStories: action.payload,
      };
    case "UPDATE_ITEM_DETAILS":
      return {
        ...state,
        itemDetails: [...state.itemDetails, action.itemDetails],
      };
    default:
      return state;
  }
};
export default myReducer;
