import * as types from '../../action/action-types'

export default function StudentReducer(state = [], action) {
    switch (action.type){
        case types.GET_ALL_STUDENT:
            return{
                ...state,
                getallsucceeded: action.Payload
            };

        case types.POST_STUDENT:
            return{
                ...state,
                success: action.Payload
        };

        case types.DELETE_DATA:
            return{
                ...state,
                success: action.Payload
        };

        case types.UPDATE_DATA:
            return{
                ...state,
                success: action.Payload
        };

        
        default:
            return state;
    }
}