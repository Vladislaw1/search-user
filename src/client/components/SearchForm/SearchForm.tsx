import React, {useEffect} from 'react';
import {fetchUsers} from "../../../redux/action-creator/users";
import {useAppDispatch} from "../../../shared/hooks/redux-hooks";

import {ReactComponent as Search} from "../../../img/icons8-search.svg";

import styles from "./SearchForm.module.scss"


const SearchForm: React.FC = () => {
    const dispatch = useAppDispatch()

    function handleChange(letter : any) {
        letter.preventDefault()
        dispatch(fetchUsers(letter.target.value))
    }

    useEffect(()=> {
    },[dispatch])

    return (
        <form className={styles.form}>
            <Search className={styles.iconSearch}/>
            <input className={styles.inputLogin} onChange={(e)=> handleChange(e)} placeholder={"Login"}/>
        </form>
    );
};

export default SearchForm;