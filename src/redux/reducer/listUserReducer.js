import { GET_USER } from "../action/listUserAction";


const initialState = {
  user: [],
};

export default function listUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        list: action.payload,
      };

    default:
      return state;
  }
}
