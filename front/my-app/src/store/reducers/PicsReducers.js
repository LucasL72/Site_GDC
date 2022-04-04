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
  Pic: {},
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
        Pic: action.payload.PIC,
      };
    case Actions.POST_ARTICLE:
      return {
        ...state,
        flash: action.payload.flash,
        listPics: action.payload.dbPics,
      };
    case Actions.DELETE_ARTICLE:
      return {
        ...state,
        flash: action.payload.flash,
        listPics: action.payload.dbPics,
      };
  }
}