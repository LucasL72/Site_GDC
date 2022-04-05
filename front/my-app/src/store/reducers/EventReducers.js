/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  listEvents: [],
  Events: {},
};

/*
 * Reducers
 * ******** */
export function EventReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_EVENT:
      return {
        ...state,
        flash: action.payload.flash,
        listEvents: action.payload.dbEvents,
      };
    case Actions.GETID_EVENT:
      return {
        ...state,
        flash: action.payload.flash,
        Events: action.payload.Events,
      };
    case Actions.POST_EVENT:
      return {
        ...state,
        flash: action.payload.flash,
        listEvents: action.payload.dbEvents,
      };
    case Actions.EDIT_EVENT:
      return {
        ...state,
        flash: action.payload.flash,
        listEvents: action.payload.dbEvents,
      };
    case Actions.DELETE_EVENT:
      return {
        ...state,
        flash: action.payload.flash,
        listEvents: action.payload.dbEvents,
      };
  }
}

/*
 * Getters
 * ******* */