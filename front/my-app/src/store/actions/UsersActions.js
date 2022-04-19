/*
 * Import - Module
 * *************** */
import axios from "axios";
import jwt_decode from 'jwt-decode'

/*
 * Import types { ... }
 * ******************** */
import {
  POST_USER,
  GET_USER,
  DELETE_USER,
  EDIT_USER,
  BAN_USER,
  LOGIN_USER,
  CHECK_AUTH,
} from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll user
export const getUser = (data) => {
  return (dispatch) => {
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
    return axios
      .post("http://localhost:3030/api/Register", data, {
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
    return axios
      .put(`http://localhost:3030/api/Admin/User/${data.id}`, data, {
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
    return axios
      .put(`http://localhost:3030/api/Admin/User/Ban/${data.id}`, data)
      .then((res) => {
        dispatch({ type: BAN_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Login User
export const login = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3030/api/login", data)
      .then((res) => {
        if (res.data.success === "success") {
          if (res.data.token) localStorage["user_token"] = res.data.token;
          res.data.token = jwt_decode(res.data.token);
          res.data.authenticate = true;
          dispatch({ type: LOGIN_USER, payload: res.data });
        } else {
          res.data.authenticate = false;
          dispatch({ type: LOGIN_USER, payload: res.data });
        }
      })
      .catch((err) => console.log(err));
  };
};

// Check user authenticate
export const check = () => {
  return (dispatch) => {
    return axios
      .get(
        `http://localhost:3030/api/auth/${localStorage["user_token"]}`
      )
      .then((res) => { if (res.data.user) { dispatch({ type: CHECK_AUTH, payload: res.data }); } })
            .catch((err) => console.log(err));
    };
}
