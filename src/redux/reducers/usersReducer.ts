import {UsersAction,UserState,UsersActionsTypes} from "../types/users";

const initialState: UserState = {
    users: [],
    loading:false,
    error: null
}

export const usersReducer = (state = initialState,action:UsersAction): UserState => {
    switch (action.type) {
        case UsersActionsTypes.FETCH_USERS:
            return {loading: true,error: null,users: []}
        case UsersActionsTypes.FETCH_USERS_SUCCESS:
            return  {loading: false,error: null, users: action.payload}
        case UsersActionsTypes.FETCH_USERS_ERROR:
            return { loading:false,error: action.payload, users: []}
        default:
            return state
    }
}