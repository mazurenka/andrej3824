import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types";

type PropsType = {
    currentPage: number
    pageSize : number
    totalUsersCount: number
    users: Array<UserType>
    ...props
}

let Users: React.FC<PropsType> = ({currentPage, pageSize, totalUsersCount, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
        />
        <div> {
            users.map(u => <User user={u}
                                 followingInProgress={props.followingInProgress}
                                 key={u.id}
                                 unfollow={props.unfollow}
                                 follow={props.follow}
                />
            )
        }</div>

    </div>
}

export default Users