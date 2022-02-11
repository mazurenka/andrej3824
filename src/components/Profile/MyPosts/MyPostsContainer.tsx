import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {PostType} from "../../../redux/store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";


export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string | undefined | any) => void
    dispatch: (action: string) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: any) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

