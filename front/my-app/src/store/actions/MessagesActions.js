/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { POST_MESSAGE, GET_MESSAGE, DELETE_MESSAGE } from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll Article
export const getMessage = (data) => {
  return (dispatch) => {
    console.log("reducers get message");
    return axios
      .get("http://localhost:3030/api/Admin/Messages")
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
    console.log("reducers get messages");
    return axios
      .get(`http://localhost:3030/api/Admin/Messages/${id}`)
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
    console.log("reducers get messages");
    return axios
      .post("http://localhost:3030/api/Contact", data)
      .then((res) => {
        dispatch({ type: POST_MESSAGE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Delete Article
export const deleteMessage = (id) => {
  return (dispatch) => {
    console.log("reducers get messages");
    return axios
      .delete(`http://localhost:3030/api/Admin/Messages/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_MESSAGE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
