export enum RepoActionsTypes {
    FETCH_REPO="FETCH_REPO",
    FETCH_REPO_SUCCESS="FETCH_REPO_SUCCESS",
    FETCH_REPO_ERROR="FETCH_REPO_ERROR"
}
interface FetchRepoAction {
    type: RepoActionsTypes.FETCH_REPO
}
interface FetchRepoSuccessAction {
    type: RepoActionsTypes.FETCH_REPO_SUCCESS,
    payload: any[]
}
interface FetchRepoErrorAction {
    type: RepoActionsTypes.FETCH_REPO_ERROR,
    payload: string
}

export type RepoAction = FetchRepoAction | FetchRepoSuccessAction | FetchRepoErrorAction

export interface RepoState {
    repo: any[],
    loading: boolean,
    error: null | string
}