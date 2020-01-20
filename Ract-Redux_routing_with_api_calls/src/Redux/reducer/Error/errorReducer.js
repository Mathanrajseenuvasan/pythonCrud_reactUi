import * as types from '../../actions/action-types';

export default function ErrorReducer(state = [], action) {
    switch (action.type) {
        case types.GET_ALL_EMPLOYEES:
            return {
                ...state,
                employeesucceeded: action.payload

            };

        case types.GET_ALL_ERROR:
            return {
                ...state,
                success: action.payload

            };

        case types.POST_ERROR:
            return {
                ...state,
                post: action.payload

            };

        case types.UPDATE_ERROR:
            return {
                ...state,
                put: action.payload

            };
        
        case types.GET_ERROR:
            return {
                ...state,
                get: action.payload

            };
            
        case types.DELETE_ERROR:
            return {
                ...state,
                delete: action.payload

            };
        

        default:
            return state;
    }
}