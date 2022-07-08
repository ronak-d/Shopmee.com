import * as types from './actionTypes';

const initState = {
    products:[],
    error: ''
};

const reducer = (state = initState, action) => {
    const {type,payload} = action;

    switch(type){
        case types.FETCH_DATA_REQUEST:
        return{
            ...state,
            error:''
        }
        
       case types.FETCH_DATA_SUCCESS:
        return{
            ...state,
            products: payload,
            error:''
        }

        case types.FETCH_DATA_FAILURE:
        return{
            ...state,
            error:''
        }

        default:
        return state;
    }
}