import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/images/images.png";

export const ProfileInfo = (profile, status, updateStatus) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}