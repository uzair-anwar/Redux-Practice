import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";

const store = configureStore(reducer, DEFAULT_STATE);
store.dispatch(updateUser({ foo: "foo" }));
store.dispatch(updateUser({ bar: "bar" }));
store.dispatch(updateUser({ foo: "baz" }));

store.dispatch(updateContact({ name: "Uzair", number: "12345678" }));
store.dispatch(updateContact({ name: "Shahid", number: "87654321" }));

console.log(store.getState());
