import axios from 'axios';
import {fetchData, fetchSuccess, fetchError, fetchMovieError, fetchMovieSuccess, fetchMovieData} from '../redux/ApiAction';

export const apiCall = (url) => (dispatch) => {
    dispatch(fetchData());
    return new Promise(()=>{
        axios.get(url)
        .then((response)=>{
            console.log(response.data);
            dispatch(fetchSuccess(response.data));
        })
        .catch((error)=> {
            dispatch(fetchError(error.message));
            console.log(error);
        })
    })
}

export const getMovieDetails = (id,language) => (dispatch ) => {
    dispatch(fetchMovieData());
    return new Promise(()=>{
        axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=1ee6cf48a26e103af8d875ebd44c7a9a&language='+language)
        .then((response)=>{
            console.log(response.data);
            dispatch(fetchMovieSuccess(response.data));
        })
        .catch((error)=> {
            dispatch(fetchMovieError(error.message));
            console.log(error);
        })
    })
}

//export default apiActionCreator;