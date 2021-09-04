import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";


export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string | undefined) => void
    dispatch: (action: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements =
        props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange}
                              ref={ newPostElement }
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost } >Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}