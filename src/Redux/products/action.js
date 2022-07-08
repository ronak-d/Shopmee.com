import axios, { Axios } from 'axios';
import * as types from './actionTypes';

    const fetchDataRequest = (payload) =>{
        return {
            type:types.FETCH_DATA_REQUEST,
            payload
        }
    }
    
    const fetchDataSuccess = (payload) =>{
        return {
            type:types.FETCH_DATA_SUCCESS,
            payload
        }
    }
    const fetchDatafailure = (payload) =>{
        return {
            type:types.FETCH_DATA_FAILURE,
            payload
        }
    }

    const fetchdata = (payload) =>{
        return (dispatch) =>{

            dispatch(fetchDataRequest());
            
            Axios.get("./products")
            .then((response) => dispatch(fetchDataSuccess(response.data)))
            .catch((error) => dispatch(fetchDatafailure(error.data)))
        };
    }

    export {fetchdata};