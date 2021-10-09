import React from "react";
import UsersList from "../../client/components/UsersList";
import Header from "../../client/components/Header/Header";

import style from "../../client/components/Header/Header.module.scss";
import {useAppSelector} from "../../shared/hooks/redux-hooks";
import SearchForm from "../../client/components/SearchForm";

const MainPage: React.FC = () => {
    const {users} = useAppSelector(state => state.users)
    const total: number = users.total_count > 0 ? users.total_count : 0

    return (
        <>
            <Header>
                <div>
                    <p className={style.total}>Всего ответов <span className={style.totalCount}>{total}</span></p>
                </div>
                <div>
                    <SearchForm/>
                </div>
            </Header>
            <UsersList/>
        </>
    )
}

export default MainPage