import {Dispatch} from "redux";
import {UserAction, UserActionsTypes} from "../types/user";
import axios from "axios";

export const fetchUser = (user : string) => async (dispatch:Dispatch<UserAction>) => {
        dispatch({type:UserActionsTypes.FETCH_USER})
    try {
        const url:string = `https://api.github.com/users/${user}`;
        const result = await axios.get(url)
        dispatch({type:UserActionsTypes.FETCH_USER_SUCCESS,payload:result.data})
    }catch (e) {
        dispatch({type:UserActionsTypes.FETCH_USER_ERROR,payload: "Пользователь не найден"})
    }
}