import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, pageSize, totalUsersCount, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
        />
        {
            users.map(u => <User user={u}
                                 followingInProgress={props.followingInProgress}
                                 key={u.id}
                                 unfollow={props.unfollow}
                                 follow={props.follow}
                />
            )
        }
    </div>
}

export default Users