import React, {useEffect} from 'react';

import styles from "./RepoListEl.module.scss"

interface Props {
    name: string,
    forks: number,
    html_url: string,
    stargazers_count: number
}

const RepoListEl: React.FC<Props> = ({name, forks, html_url,stargazers_count}) => {
    return (
        <li className={styles.repo_list_el}>
            <a href={html_url} className={styles.repo_list_el_link}>
                <p className={styles.repo_list_el_caption}>{name}</p>
                <div>
                    <p className={styles.repo_list_el_data}>{forks} Forks</p>
                    <p className={styles.repo_list_el_data}>{stargazers_count} Stars</p>
                </div>
            </a>
        </li>
    );
};

export default RepoListEl;