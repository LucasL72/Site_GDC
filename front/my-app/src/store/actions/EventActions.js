/*
 * Import - Module
 * *************** */
import axios from "axios";

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
    console.log('reducers get events')
    return axios.get("http://localhost:3030/Admin/Events")
      .then((res) => {
        console.log('getArticles', res.data)
        dispatch({ type: GET_EVENT, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// getID Article
export const getEventID = (id) => {
  return (dispatch) => {
    console.log('reducers get events')
    return axios.get(`http://localhost:3030/ADmin/Events/${ id }`)
      .then((res) => {
        console.log('getEventID', res.data)
        dispatch({ type: GET_EVENT, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Create Article
export const createEvent = (data) => {
  return (dispatch) => {
    console.log('reducers get events')
    return axios.post("http://localhost:3030/Admin/Events", data)
      .then((res) => {
        dispatch({ type: POST_EVENT, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Delete Article
export const deleteEvent = (id) => {
  return (dispatch) => {
    console.log('reducers get events')
    return axios.delete(`http://localhost:3030/Admin/Events/${ id }`)
      .then((res) => {
        dispatch({ type: DELETE_EVENT, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Edit Article
export const editEvent = (data) => {
  return (dispatch) => {
    console.log('reducers get events')
    return axios.put(`http://localhost:3030/Admin/Events/${ data.id }`, data)
      .then((res) => {
        dispatch({ type: EDIT_EVENT, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};