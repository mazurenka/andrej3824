import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidmount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode ===0) {
                    let {Id, login, email} = response.data.data;
                    this.props.setAuthUserData(Id, email, login);
                }
            })
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);