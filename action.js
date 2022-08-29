// Action types
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_CONTACTS = "UPDATE_CONTACTS";

// Action creater
export const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});

export const updateContact = (newContect) => ({
  type: UPDATE_CONTACTS,
  payload: newContect,
});
