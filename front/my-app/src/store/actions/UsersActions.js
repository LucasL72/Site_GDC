/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import {
  POST_USER,
  GET_USER,
  DELETE_USER,
  EDIT_USER,
  BAN_USER,
} from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll user
export const getUser = (data) => {
  return (dispatch) => {
    console.log("reducers get events");
    return axios
      .get("http://localhost:3030/api/Admin/User")
      .then((res) => {
        console.log("getUser", res.data);
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// getID user
export const getUserID = (id) => {
  return (dispatch) => {
    console.log("reducers get users");
    return axios
      .get(`http://localhost:3030/api/Admin/User/${id}`)
      .then((res) => {
        console.log("getUserID", res.data);
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Create user
export const createUser = (data) => {
  return (dispatch) => {
    console.log("reducers get events");
    return axios
      .post("http://localhost:3030/api/Register", data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch({ type: POST_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Delete user
export const deleteUser = (id) => {
  return (dispatch) => {
    console.log("reducers get events");
    return axios
      .delete(`http://localhost:3030/api/Admin/User/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Edit user
export const editUser = (data) => {
  return (dispatch) => {
    console.log("reducers get events");
    return axios
      .put(`http://localhost:3030/api/Admin/User/${data.id}`, data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch({ type: EDIT_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Edit user
export const BanUser = (data) => {
  return (dispatch) => {
    console.log("reducers get ban user");
    return axios
      .put(`http://localhost:3030/api/Admin/User/Ban/${data.id}`, data)
      .then((res) => {
        dispatch({ type: BAN_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
