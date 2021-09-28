import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";
import Field, {reduxForm} from "redux-form";


export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string | undefined) => void
    dispatch: (action: string) => void
}

let AddNewPostForm = (props: { onChange: () => void, ref: React.RefObject<HTMLTextAreaElement>, value: string, onClick: () => void, elements: JSX.Element[] }) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostText'} component={'textarea'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {props.elements}
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


