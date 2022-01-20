import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";

export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img src='https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}