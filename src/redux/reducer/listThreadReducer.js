import { FETCH_START, GET_THREAD } from "../action/listThreadAction";

const initialState = {
  list: [],
  isLoading: false,
  err: null,
};

const listThreadReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
      
    case GET_THREAD:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default listThreadReducer;
