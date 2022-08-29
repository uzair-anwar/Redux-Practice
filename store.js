// Action types
const UPDATE_USER = "UPDATE_USER";
const UPDATE_CONTACTS = "UPDATE_CONTACTS";

class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }
  getState() {
    return this.state;
  }

  dispatch(update) {
    this.state = this.reducer(this.state, update);
  }
}

const DEFAULT_STATE = { user: {}, contacts: [] };
const merge = (prev, next) => Object.assign({}, prev, next);

const contactReducer = (state, action) => {
  if (action.type === UPDATE_CONTACTS) return [...state, action.payload];
  return state;
};
const userReducer = (state, action) => {
  if (action.type === UPDATE_USER) return merge(state, action.payload);
  if (action.type === UPDATE_CONTACTS)
    return merge(state, { prevContact: action.payload });
  return state;
};

const reducer = (state, action) => ({
  user: userReducer(state.user, action),
  contacts: contactReducer(state.contacts, action),
});
const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});

const updateContact = (newContect) => ({
  type: UPDATE_CONTACTS,
  payload: newContect,
});

const store = new Store(reducer, DEFAULT_STATE);
debugger;
store.dispatch(updateUser({ foo: "foo" }));
store.dispatch(updateUser({ bar: "bar" }));
store.dispatch(updateUser({ foo: "baz" }));

store.dispatch(updateContact({ name: "Uzair", number: "12345678" }));
store.dispatch(updateContact({ name: "Shahid", number: "87654321" }));

console.log(store.getState());
