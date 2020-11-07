import ACTION_TYPES from './ActionTypes';

const initialState = {
    loading: false,
    data: '',
    error: '',
};

const detailsReducer = (state= initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.MOVIE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ACTION_TYPES.MOVIE_SUCCESS:
            console.log("PAYLOAD:",action.payload);
            return {
                ...state,
                data: action.payload,
                loading:false,
            };
        case ACTION_TYPES.MOVIE_ERROR:
            return {
                ...state,
                error:action.payload,
            };
        default:
            return state;
    }
};

export default detailsReducer;