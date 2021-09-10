import React from "react";
import {ProfilePageType, RootStateType} from "../../redux/store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

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
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)