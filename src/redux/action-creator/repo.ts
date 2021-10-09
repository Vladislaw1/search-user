import {Dispatch} from "redux";
import {RepoAction, RepoActionsTypes} from "../types/repo";

import axios from "axios";

export const fetchRepo = (user : string) => async (dispatch:Dispatch<RepoAction>) => {
        dispatch({type:RepoActionsTypes.FETCH_REPO})
    try {
        const url = `https://api.github.com/users/${user}/repos`
        const result = await axios.get(url)
        dispatch({type: RepoActionsTypes.FETCH_REPO_SUCCESS,payload: result.data})
    }catch (e) {
        dispatch({type:RepoActionsTypes.FETCH_REPO_ERROR,payload: "Репозитории не найдены"})
    }
}