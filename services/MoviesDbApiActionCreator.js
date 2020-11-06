import axios from 'axios';
import {fecthData, fetchSuccess, fetchError} from './utils/ApiAction';

const apiActionCreator = (url) => (dispatch) => {
    dispatch(fecthData());
    return new Promise(()=>{
        axios.get(url)
        .then((response)=>{
            dispatch(fetchSuccess(response.data));
        })
        .catch((error)=> {
            dispatch(fetchError(error));
            console.log(error);
        })
    })
}

export default apiActionCreator;