/*
 * Import - Module
 * *************** */
import {api} from "../../config/axios";



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
    return api.get("/Photos")
      .then((res) => {
        console.log('getPic', res.data)
        dispatch({ type: GET_PIC, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// getID Article
export const getPicID = (id) => {
    return (dispatch) => {
      return api.get(`/Admin/Photos/${ id }`)
        .then((res) => {
          console.log('getPicID', res.data)
          dispatch({ type: GET_PIC, payload: res.data})
        })
        .catch(err => console.log(err));
    }
  };

// Create Article
export const createPic = (data) => {
  return (dispatch) => {
    return api.post("/Admin/Photos", data,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        dispatch({ type: POST_PIC, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Delete Article
export const deletePic = (id) => {
  return (dispatch) => {
    return api.delete(`/Admin/Photos/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_PIC, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};
