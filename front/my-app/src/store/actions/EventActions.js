/*
 * Import - Module
 * *************** */
import { api } from "../../config/axios";

/*
 * Import types { ... }
 * ******************** */
import { POST_EVENT, GET_EVENT, DELETE_EVENT, EDIT_EVENT } from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll Article
export const getEvent = (data) => {
  return (dispatch) => {
    console.log("reducers get events");
    return api
      .get("/Admin/Events")
      .then((res) => {
        console.log("getArticles", res.data);
        dispatch({ type: GET_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// getID Article
export const getEventID = (id) => {
  return (dispatch) => {
    return api
      .get(`/Admin/Events/${id}`)
      .then((res) => {
        console.log("getEventID", res.data);
        dispatch({ type: GET_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Create Article
export const createEvent = (data) => {
  return (dispatch) => {
    return api
      .post("/Admin/Events", data)
      .then((res) => {
        dispatch({ type: POST_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Delete Article
export const deleteEvent = (id) => {
  return (dispatch) => {
    return api
      .delete(`/Admin/Events/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Edit Article
export const editEvent = (data) => {
  return (dispatch) => {
    return api
      .put(`/Admin/Events/${data.id}`, data)
      .then((res) => {
        dispatch({ type: EDIT_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
