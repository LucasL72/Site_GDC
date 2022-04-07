/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  listUsers: [],
  Users: {},
};

/*
 * Reducers
 * ******** */
export function UsersReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_USER:
      return {
        ...state,
        flash: action.payload.flash,
        listUsers: action.payload.dbUsers,
      };
    case Actions.GETID_USER:
      return {
        ...state,
        flash: action.payload.flash,
        Users: action.payload.Users,
      };
    case Actions.POST_USER:
      return {
        ...state,
        flash: action.payload.flash,
        listUsers: action.payload.dbUsers,
      };
    case Actions.EDIT_USER:
      return {
        ...state,
        flash: action.payload.flash,
        listUsers: action.payload.dbUsers,
      };
    case Actions.DELETE_USER:
      return {
        ...state,
        flash: action.payload.flash,
        listUsers: action.payload.dbUsers,
      };
    case Actions.BAN_USER:
      return {
        ...state,
        flash: action.payload.flash,
        Users: action.payload.Users,
      };
  }
}

/*
 * Getters
 * ******* */
