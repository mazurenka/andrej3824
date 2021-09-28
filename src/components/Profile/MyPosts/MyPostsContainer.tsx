import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import {PostType, RootStateType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string | undefined | any) => void
    dispatch: (action: string) => void
}

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.posts,
        newPostText: state.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;

