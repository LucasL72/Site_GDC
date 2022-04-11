/*
 * React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import { ArticlesReducer } from "./reducers/ArticlesReducers";
import { EventReducer } from "./reducers/EventReducers";
import { UsersReducer } from "./reducers/UsersReducers";
import { MessagesReducer } from "./reducers/MessagesReducer";
import { PicsReducer } from "./reducers/PicsReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  articles: ArticlesReducer,
  events: EventReducer,
  users:UsersReducer,
  messages:MessagesReducer,
  pics:PicsReducer

});

/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod