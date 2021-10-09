import React from 'react';
import {useAppSelector} from "../../../shared/hooks/redux-hooks";
import UserListEl from "../UserListEl";

import styles from "./UserList.module.scss"

const UsersList: React.FC = () => {

    const {users, loading, error} = useAppSelector(state => state.users)

    console.log(users)

    return (
        <div>
            {loading && <p>...Loading</p>}
            <ul className={styles.userList}>
                {users.items?.map((el: any) => <UserListEl key={el.node_id} {...el}/>)}
            </ul>
        </div>
    );
};

export default UsersList;