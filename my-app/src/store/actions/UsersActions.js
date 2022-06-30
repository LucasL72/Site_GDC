/*
 * Import - Module
 * *************** */
import { api } from "../../config/axios";
import jwt_decode from "jwt-decode";

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
  VERIF_MAIL,
  LOSTPASS_USER,
} from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll user
export const getUser = (data) => {
  return (dispatch) => {
    return api
      .get("/Admin/User")
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
    return api
      .get(`/Admin/User/${id}`)
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
    return api
      .post("/Register", data, {
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
    return api
      .delete(`/Admin/User/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Edit user
export const editUser = (data) => {
  return (dispatch) => {
    return api
      .put(`/lostpassword/${data.id}`, data)
      .then((res) => {
        dispatch({ type: EDIT_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
// Edit user
export const editUser2 = (data) => {
  return (dispatch) => {
    return api
      .put(`/lostpassword`, data)
      .then((res) => {
        dispatch({ type: EDIT_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Edit user
export const BanUser = (data) => {
  return (dispatch) => {
    return api
      .put(`/Admin/User/Ban/${data.id}`, data)
      .then((res) => {
        dispatch({ type: BAN_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Login User
export const login = (data) => {
  return (dispatch) => {
    return api
      .post("/login", data)
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
    return api
      .get(`/auth/${localStorage["user_token"]}`)
      .then((res) => {
        if (res.data.user) {
          dispatch({ type: CHECK_AUTH, payload: res.data });
        }
      })
      .catch((err) => console.log(err));
  };
};
export const VerifMail = (id) => {
  return (dispatch) => {
    return api
      .get(`/auth/verify/${id}`)
      .then((res) => {
        dispatch({ type: VERIF_MAIL, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const Lostpass = (data) => {
  return (dispatch) => {
    return api
      .post("/lostpassword", data)
      .then((res) => {
        dispatch({ type: LOSTPASS_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
