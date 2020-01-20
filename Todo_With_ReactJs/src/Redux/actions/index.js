import * as types from './action-types';

export const getAllemployee = () => {
    return dispatch => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: types.GET_ALL_EMPLOYEES, payload: json });
            })
          
    }
}