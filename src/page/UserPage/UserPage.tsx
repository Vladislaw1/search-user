import React, {useEffect} from "react";
import {Link,RouteComponentProps} from "react-router-dom"

import {useAppDispatch, useAppSelector} from "../../shared/hooks/redux-hooks";
import {fetchUser} from "../../redux/action-creator/user";

import Header from "../../client/components/Header/Header";
import UserInfo from "../../client/components/UserInfo/UserInfo";
import RepoList from "../../client/components/RepoList";

import styles from "./UserPage.module.scss"

type TParams = {
    username: string
}

const UserPage: React.FC<any> = ({match}: RouteComponentProps<TParams>) => {
    const username: string = match.params.username
    const dispatch = useAppDispatch()

    const {user, loading, error} = useAppSelector(state => state.user)
    useEffect(() => {
        dispatch(fetchUser(username))
    }, [dispatch, username])

    return (<div>
        <Header>
            <Link className={styles.btn_Back_Link} to={"/"}>
                <button className={styles.btn_Back}>Go Back</button>
            </Link>
        </Header>
        <div className={styles.user_page}>
            <div >
                {loading && <p>Loading user...</p>}
                {!loading && <UserInfo {...user}/>}
            </div>
            <div>
                <RepoList userName={username}/>
            </div>
        </div>
    </div>)
}

export default UserPage;