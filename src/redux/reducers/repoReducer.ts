import {RepoAction, RepoState,RepoActionsTypes} from "../types/repo";

const initialState: RepoState = {
    repo: [],
    loading: false,
    error: null
}

export const repoReducer = (state = initialState,action:RepoAction):RepoState =>{
    switch (action.type) {
        case RepoActionsTypes.FETCH_REPO:
            return {loading:true , error: null, repo: []}
        case RepoActionsTypes.FETCH_REPO_SUCCESS:
            return {loading: false, error: null , repo :action.payload}
        case RepoActionsTypes.FETCH_REPO_ERROR:
            return {loading: false, error: action.payload, repo: []}
        default:
            return state
    }
}