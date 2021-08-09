import styles from "./Users.module.css"; 
import User from "./User/User";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.users}>
            <ul className={styles.pagination}>
                {pages.map((page) => {
                    return (
                        <li
                            key={page}
                            className={props.currentPage === page && styles.active}
                            onClick={(e) => props.onPageChanged(page)}>
                            {page}
                        </li>
                    );
                })}
            </ul>
            {props.users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                    location={user.location}
                    toggleFollow={props.toggleFollow}
                    toggleIsFollowingInProgress={props.toggleIsFollowingInProgress}
                    followingInProgress={props.followingInProgress}
                    followUser={props.followUser}
                    unfollowUser={props.unfollowUser}/>
            ))}
        </div>
    );
};

export default Users;