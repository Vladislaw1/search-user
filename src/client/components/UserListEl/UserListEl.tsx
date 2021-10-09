import React from 'react';
import {Link} from "react-router-dom";

import styles from "./UserListEl.module.scss"

const UserListEl = (user: any) => {
    return (
        <li className={styles.user_List_El}>
            <Link className={styles.user_List_El_Link} to={`/user/${user.login}`} key={user.node_id}>
                <img className={styles.user_Img} src={user.avatar_url} alt={user.login}/>
                <div>
                    <p className={styles.user_Login}>Login: {user.login}</p>
                    <p></p>
                </div>
            </Link>
        </li>
    );
};

export default UserListEl;