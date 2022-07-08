import * as types from './actionTypes';

const initState = {
    products:[],
    error: '',
    loading: false
};

const reducer = (state = initState, action) => {
    const {type,payload} = action;

    switch(type){
        case types.FETCH_DATA_REQUEST:
        return{
            ...state,
            error:'',
            loading: true
            
        }
        
       case types.FETCH_DATA_SUCCESS:
        return{
            ...state,
            products: payload,
            error:'',
            loading: false
        }

        case types.FETCH_DATA_FAILURE:
        return{
            ...state,
            error:'',
            loading: false
        }

        default:
        return state;
    }
}

export default reducer;