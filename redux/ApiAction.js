import ACTION_TYPES from './ActionTypes.js';

export const fetchData = () => ({
    type: ACTION_TYPES.API_LOADING,
});

export const fetchSuccess = (data) =>({
    type: ACTION_TYPES.API_SUCCESS,
    payload: data
});

export const fetchError = () => ({
    type: ACTION_TYPES.API_ERROR,
});