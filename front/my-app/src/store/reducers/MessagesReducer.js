/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  listMessages: [],
  Messages: {},
};

/*
 * Reducers
 * ******** */
export function MessagesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_MESSAGE:
      return {
        ...state,
        flash: action.payload.flash,
        listMessages: action.payload.dbMessages,
      };
    case Actions.GETID_MESSAGE:
      return {
        ...state,
        flash: action.payload.flash,
        Messages: action.payload.Messages,
      };
    case Actions.POST_MESSAGE:
      return {
        ...state,
        flash: action.payload.flash,
        listMessages: action.payload.dbMessages,
      };
    case Actions.DELETE_MESSAGE:
      return {
        ...state,
        flash: action.payload.flash,
        listMessages: action.payload.dbMessages,
      };
  }
}

/*
 * Getters
 * ******* */