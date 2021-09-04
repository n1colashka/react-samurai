import styles from "./Users.module.css"; 
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    return (
        <>
            <Paginator totalItemsCount={props.totalUsersCount} partSize={10} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            <div className={styles.users}>
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
        </>
    );
};

export default Users;