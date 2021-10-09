import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../shared/hooks/redux-hooks";
import {fetchRepo} from "../../../redux/action-creator/repo";
import RepoListEl from "../RepoListEl";

import styles from "./RepoList.module.scss"
import SearchForm from "../SearchForm";

interface Props {
    userName: string
}

const RepoList: React.FC<Props> = ({userName}) => {
    const dispatch = useAppDispatch()

    const {repo,loading,error} = useAppSelector(state => state.repo)

    useEffect(()=>{
        dispatch(fetchRepo(userName))
    },[dispatch,userName])

    return (
        <>
            <ul className={styles.repo_list}>
                {repo?.map(el => <RepoListEl key={el.node_id} {...el}/>)}
            </ul>
        </>
    );
};

export default RepoList;