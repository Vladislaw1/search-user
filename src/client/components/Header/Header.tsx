import React from 'react';
import style from "./Header.module.scss"
import SearchForm from "../SearchForm";

const Header: React.FC = ({children}) => {
    return (
        <header className={style.header}>
            <div>
                <h1 className={style.heading}>Git<span className={style.headingHub}>Hub</span> Searcher</h1>
            </div>
            {children}
        </header>
    );
};

export default Header;