/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { POST_PIC, GET_PIC, DELETE_PIC,} from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll Article
export const getPic = (data) => {
  return (dispatch) => {
    console.log('reducers get pics')
    return axios.get("http://localhost:3030/Photos")
      .then((res) => {
        console.log('getArticles', res.data)
        dispatch({ type: GET_PIC, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// getID Article
export const getPicID = (id) => {
    return (dispatch) => {
      console.log('reducers get pic')
      return axios.get(`http://localhost:3030/Photos/${ id }`)
        .then((res) => {
          console.log('getArticleID', res.data)
          dispatch({ type: GET_PIC, payload: res.data})
        })
        .catch(err => console.log(err));
    }
  };

// Create Article
export const createPic = (data) => {
  return (dispatch) => {
    return axios.post("http://localhost:3030/Admin/Photos", data)
      .then((res) => {
        dispatch({ type: POST_PIC, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Delete Article
export const deleteArticle = (id) => {
  return (dispatch) => {
    return axios.delete(`http://localhost:3030/Admin/Photos/${ id }`)
      .then((res) => {
        dispatch({ type: DELETE_PIC, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};
