/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  listComs: [],
  coms: {},
};

/*
 * Reducers
 * ******** */
export function ComsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_COM:
      return {
        ...state,
        flash: action.payload.flash,
        listComs: action.payload.dbComs,
      };
    case Actions.GETID_COM:
      return {
        ...state,
        flash: action.payload.flash,
        coms: action.payload.coms,
      };
    case Actions.POST_COM:
      return {
        ...state,
        flash: action.payload.flash,
        listComs: action.payload.dbComs,
      };
    case Actions.DELETE_COM:
      return {
        ...state,
        flash: action.payload.flash,
        listComs: action.payload.dbComs,
      };
  }
}

/*
 * Getters
 * ******* */