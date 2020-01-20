import * as types from './action-types'

export const getAllEmployee = () => {
    console.log("get--- action ---")
    return dispatch => {
        fetch('api/v1/students/',  { mode: 'no-cors'})
        .then(response => response.json())
        .then(json => {
            dispatch({type:types.GET_ALL_STUDENT, Payload:json});
        }).catch(err =>{
            dispatch({type:types.GET_ALL_STUDENT_ERROR, Payload:err});
        })
    }
}

export const postEmployee = (data) => {
    
    console.log("post-------action",data)
    return dispatch => {
        fetch('api/v1/students/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
           body: JSON.stringify(data)
       }).then(res => res.json())
       .then(json => {
           dispatch({type:types.POST_STUDENT, Payload:json});
       })
       
    }
}