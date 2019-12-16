import { SET_LOADING, TECHS_ERROR, GET_TECHS, DELETE_TECH, ADD_TECH } from './types';

// Get Techs
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const response = await fetch('/techs');
    const data = await response.json();
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

// Add new tech
export const addTech = tech => async dispatch => {
  try {
    setLoading();
    const response = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

// Delete tech
export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

// Set loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
