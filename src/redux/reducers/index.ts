import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {userReducer} from "./userReducer";
import {repoReducer} from "./repoReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
    repo: repoReducer
})