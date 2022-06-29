/*
 * Import - Module
 * *************** */
import {api} from "../../config/axios";


/*
 * Import types { ... }
 * ******************** */
import {
  POST_COM,
  GET_COM,
  DELETE_COM,
} from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll Article
export const getCom = (data) => {
  return (dispatch) => {
    return api
      .get("/Admin/Coms")
      .then((res) => {
        console.log("getcoms", res.data);
        dispatch({ type: GET_COM, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// getID Article
export const getComID = (id) => {
  return (dispatch) => {
    return api
      .get(`/Admin/Coms/${id}`)
      .then((res) => {
        console.log("getComID", res.data);
        dispatch({ type: GET_COM, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Create Article
export const createCom = (data,id) => {
  return (dispatch) => {
    return api
      .post(`/Blog/${id}`,data)
      .then((res) => {
        dispatch({ type: POST_COM, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Delete Article
export const deleteCom = (id) => {
  return (dispatch) => {
    return api
      .delete(`/Admin/Coms/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_COM, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

