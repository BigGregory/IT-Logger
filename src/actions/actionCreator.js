import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  CLEAR_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  SEARCH_LOGS,
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR
} from '../actions/types';

// Get Logs from Server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// Add a log
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// Update a log
export const updateLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// Search Logs from Server
export const searchLogs = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// Delete Log
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: LOGS_ERROR, payload: error.response.data });
  }
};

// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: SET_CURRENT
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
