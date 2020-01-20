import * as types from '../../actions/action-types';

export default function EmployeeReducer(state = [], action) {
    switch (action.type) {
        case types.GET_ALL_EMPLOYEES:
            return {
                ...state,
                employeesucceeded: action.payload

            };
        default:
            return state;
    }
}