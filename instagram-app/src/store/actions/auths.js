import * as actionTypes from "../actionTypes/actionTypes";
import * as services from "../../services";


export const signIn = (formData) => async (dispatch) => {
    const {data} = await services.signIn(formData);
    dispatch({type: actionTypes.AUTH, data})
}
export const signUp = (formData) => async (dispatch) => {
    const {data} = await services.signUp(formData)
    dispatch({type: actionTypes.AUTH, data})
}
export const isAuthenticated = () => async (dispatch)=>{
    dispatch({type:actionTypes.GET_USER})
}

export const logOut = () => async (dispatch) => {
    dispatch({type: actionTypes.LOG_OUT});
}
