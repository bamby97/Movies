import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from '../redux/ApiAction';

const apiActionCreator = (url) => (dispatch) => {
    dispatch(fetchData());
    return new Promise(()=>{
        axios.get(url)
        .then((response)=>{
            console.log(response.data.results);
            dispatch(fetchSuccess(response.data.results));
        })
        .catch((error)=> {
            dispatch(fetchError(error.message));
            console.log(error);
        })
    })
}

export default apiActionCreator;