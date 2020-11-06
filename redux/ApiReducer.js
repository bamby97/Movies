import ACTION_TYPES from './utils/ActionTypes';

const initialState = {
    loading: false,
    data: '',
    error: '',
};

const apiReducer = (state= initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.API_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ACTION_TYPES.API_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading:false,
            };
        case ACTION_TYPES.API_ERROR:
            return {
                ...state,
                error:action.payload,
            };
        default:
            return state;
    }
};

export default apiReducer;