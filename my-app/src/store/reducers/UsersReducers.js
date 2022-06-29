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
  token:{},
  user: {},
  authenticate: null,
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
        user: action.payload.user,
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
        user: action.payload.user,
      };
    case Actions.LOGIN_USER:
      return {
        ...state,
        flash: action.payload.flash,
        user: action.payload.token,
        authenticate: action.payload.authenticate,
      };
    case Actions.CHECK_AUTH:
      return {
        ...state,
        flash: action.payload.flash,
        token: action.payload.user,
      };
      case Actions.VERIF_MAIL:
        return {
          ...state,
          flash: action.payload.flash,
          listUsers: action.payload.dbUsers,
        };
  }
}

/*
 * Getters
 * ******* */
