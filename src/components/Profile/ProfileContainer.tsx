import React from "react";
import {ProfilePageType, RootStateType} from "../../redux/store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)

