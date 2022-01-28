import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer  />
        </div>
    )
}