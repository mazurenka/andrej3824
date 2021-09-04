import React from "react";
import s from './Post.module.css';
import {PostType} from "../../../../redux/store";

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU'}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}