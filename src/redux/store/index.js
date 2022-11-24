import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import listKampusReducer from "../reducer/listKampusReducer";
import listThreadReducer from "../reducer/listThreadReducer";
import listUserReducer from "../reducer/listUserReducer";


const allReducer = combineReducers({
  listKampus: listKampusReducer,
  listThread: listThreadReducer,
  listUser: listUserReducer
});

const store = createStore(allReducer, applyMiddleware(thunk))
export default store;
