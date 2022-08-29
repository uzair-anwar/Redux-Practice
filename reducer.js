const { combineReducers } = require("redux");

import { UPDATE_USER, UPDATE_CONTACTS } from "./action";

const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACTS) return [...state, action.payload];
  return state;
};
const userReducer = (state = {}, action) => {
  if (action.type === UPDATE_USER) return merge(state, action.payload);
  if (action.type === UPDATE_CONTACTS)
    return merge(state, { prevContact: action.payload });
  return state;
};

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
});

export default reducer;
