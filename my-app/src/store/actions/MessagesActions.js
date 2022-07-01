/*
 * Import - Module
 * *************** */
import { api } from "../../config/axios";

/*
 * Import types { ... }
 * ******************** */
import { POST_MESSAGE, GET_MESSAGE, DELETE_MESSAGE,ADD_MESSAGE } from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll Article
export const getMessage = (data) => {
  return (dispatch) => {
    return api
      .get("/Admin/Messages")
      .then((res) => {
        console.log("getMessage", res.data);
        dispatch({ type: GET_MESSAGE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// getID Article
export const getMessageID = (id) => {
  return (dispatch) => {
  
    return api
      .get(`/Admin/Messages/${id}`)
      .then((res) => {
        console.log("getMessageID", res.data);
        dispatch({ type: GET_MESSAGE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Create Article
export const createMessage = (data) => {
  return (dispatch) => {

    return api
      .post("/Contact", data)
      .then((res) => {
        dispatch({ type: POST_MESSAGE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Delete Article
export const deleteMessage = (id) => {
  return (dispatch) => {
    return api
      .delete(`/Admin/Messages/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_MESSAGE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Reply Message (POST)
export const replyMessage = (form) => {
  return (dispatch) => {
    return api
      .post("/Admin/Messages/reply", form)
      .then((res) => {
        dispatch({
          type: ADD_MESSAGE,

          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
