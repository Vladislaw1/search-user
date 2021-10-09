export enum UsersActionsTypes {
    FETCH_USERS="FETCH_USERS",
    FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR="FETCH_USERS_ERROR"
}

interface FetchUsersAction {
    type: UsersActionsTypes.FETCH_USERS
}
interface FetchUsersSuccessAction {
    type: UsersActionsTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}
interface FetchUsersErrorAction {
    type: UsersActionsTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction

export interface UserState {
    users: any,
    loading: boolean,
    error: null | string
}
