import React from 'react';
import styles from "./UserInfo.module.scss";

interface UserInfo {
        avatar_url: string
        login: string,
        email: null | string,
        location: string,
        created_at: string,
        followers: number,
        following: number
}


const UserInfo: React.FC<UserInfo> = (user) => {
    console.log(user)
    return (
        <div className={styles.user_info}>
            <img className={styles.user_info_img} src={user.avatar_url} alt={user.login}/>
            <div>
                <p className={styles.user_data}><span className={styles.user_data_caption}>Login:</span> {user.login}</p>
                <p className={styles.user_data}><span className={styles.user_data_caption}>Email:</span> {user.email === null ? "E-mail не указан" : user.email}</p>
                <p className={styles.user_data}><span className={styles.user_data_caption}>Location:</span> {user.location}</p>
                <p className={styles.user_data}><span className={styles.user_data_caption}>Join Date:</span> {user.created_at}</p>
                <p className={styles.user_data}><span className={styles.user_data_caption}>Followers:</span> {user.followers}</p>
                <p className={styles.user_data}><span className={styles.user_data_caption}>Following:</span> {user.following}</p>
            </div>
        </div>
    );
};

export default UserInfo;