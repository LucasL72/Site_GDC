/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  listPics: [],
  Pics: {},
};

/*
 * Reducers
 * ******** */
export function PicsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_PIC:
      return {
        ...state,
        flash: action.payload.flash,
        listPics: action.payload.dbPics,
      };
    case Actions.GETID_PIC:
      return {
        ...state,
        flash: action.payload.flash,
        Pics: action.payload.Pics,
      };
    case Actions.POST_PIC:
      return {
        ...state,
        flash: action.payload.flash,
        listPics: action.payload.dbPics,
      };
    case Actions.DELETE_PIC:
      return {
        ...state,
        flash: action.payload.flash,
        listPics: action.payload.dbPics,
      };
  }
}