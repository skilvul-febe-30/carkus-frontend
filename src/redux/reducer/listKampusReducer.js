import { FETCH_START, GET_KAMPUS } from "../action/listKampusAction";

const initialState = {
  list: [],
  isLoading: false,
  err: null,
};

const listKampusReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_KAMPUS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default listKampusReducer;
