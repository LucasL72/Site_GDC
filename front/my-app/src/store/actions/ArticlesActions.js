/*
 * Import - Module
 * *************** */
import { api } from "../../config/axios";

/*
 * Import types { ... }
 * ******************** */
import {
  POST_ARTICLE,
  GET_ARTICLE,
  DELETE_ARTICLE,
  EDIT_ARTICLE,
} from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll Article
export const getArticles = (data) => {
  return (dispatch) => {
    return api
      .get("/Blog")
      .then((res) => {
        dispatch({ type: GET_ARTICLE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// getID Article
export const getArticleID = (id) => {
  return (dispatch) => {
    console.log("reducers get article");
    return api
      .get(`/Blog/${id}`)
      .then((res) => {
        dispatch({ type: GET_ARTICLE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Create Article
export const createArticle = (data) => {
  return (dispatch) => {
    return api
      .post("/Admin/Blog", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch({ type: POST_ARTICLE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Delete Article
export const deleteArticle = (id) => {
  return (dispatch) => {
    return api
      .delete(`/Admin/Blog/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_ARTICLE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Edit Article
export const editArticle = (data) => {
  return (dispatch) => {
    return api
      .put(`/Admin/Blog/${data.id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch({ type: EDIT_ARTICLE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
