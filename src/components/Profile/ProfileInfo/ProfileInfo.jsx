import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.background}>
                <img
                    src="https://images.pexels.com/photos/5133461/pexels-photo-5133461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
            </div>
            <div className={styles.body}>
                <div className={styles.avatar}>
                    <img src={props.profile.photos.large || "https://i.stack.imgur.com/l60Hf.png"} alt="" />
                </div>
                <div className={styles.about}>
                    <p>Name: <span>{props.profile.fullName}</span></p>
                    <p>About: <span>{props.profile.lookingForAJobDescription}</span></p>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <p>Job: <span>{props.profile.lookingForAJob ? 'Looking for a job' : 'Don\'t looking for a job'}</span></p>
                    <div>
                        My contacts:
                        <p>
                            <a href={props.profile.contacts.github}>Github</a>
                        </p>
                        <p>
                            <a href={props.profile.contacts.vk}>vk</a>
                        </p>
                        <p>
                            <a href={props.profile.contacts.facebook}>facebook</a>
                        </p>
                        <p>
                            <a href={props.profile.contacts.instagram}>instagram</a>
                        </p>
                        <p>
                            <a href={props.profile.contacts.twitter}>twitter</a>
                        </p>
                        <p>
                            <a href={props.profile.contacts.website}>website</a>
                        </p>
                        <p>
                            <a href={props.profile.contacts.youtube}>youtube</a>
                        </p>
                        <p>
                            <a href={props.profile.contacts.mainLink}>Main link</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
