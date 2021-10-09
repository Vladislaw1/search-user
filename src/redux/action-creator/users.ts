import {UsersAction, UsersActionsTypes} from "../types/users";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = (letter : string) => async (dispatch:Dispatch<UsersAction>) => {
        dispatch({type:UsersActionsTypes.FETCH_USERS})
    try {
        const url:string = `https://api.github.com/search/users?&q=${letter}`;
        const result = await axios.get(url)
        console.log(result.data)
        dispatch({type:UsersActionsTypes.FETCH_USERS_SUCCESS,payload:result.data})
    }catch (e) {
        dispatch({type:UsersActionsTypes.FETCH_USERS_ERROR,payload: "Ошибка при загрузке пользователей"})
    }
}