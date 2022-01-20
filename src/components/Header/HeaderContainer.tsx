import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});
export default connect(mapStateToProps, {logout})(HeaderContainer);