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

export const getallerror = () => {
    // console.log("get--- error ---")
    return dispatch => {
        fetch('http://localhost:7000/api/v1/error/')
        .then(response => response.json())
        .then(json => {
            // console.log("-- data --", json)
            dispatch({type:types.GET_ALL_ERROR, payload:json});
        })
    }
}

export const posterror = (data) => {
    
    console.log("post-------action",data)
    return dispatch => {
        fetch('http://localhost:7000/api/v1/error/',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
           body: JSON.stringify(data)
       }).then(res => res.json())
       .then(json => {
           dispatch({type:types.POST_ERROR, Payload:json});
       })
    }
}

export const updateError = (id,data) => {
    console.log("update",id)
    return dispatch => {
        fetch('http://localhost:7000/api/v1/error/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(json => {
            dispatch({type:types.UPDATE_ERROR, Payload:json});
 })
}
}

export const geterror = (id) => {
    return dispatch => {
        fetch('http://localhost:7000/api/v1/error/' + id)
        .then(response => response.json())
        .then(json => {
            dispatch({type:types.GET_ERROR, payload:json});
        })
    }
}

export const deletError = (item) => {
    console.log("delete",item)
    return dispatch => {
        fetch('api/v1/error/' + item, {
      method: 'delete'
    })
    .then(response => response.json())
    .then(json => {
        dispatch({type:types.DELETE_ERROR, Payload:json});
    })
  }
}