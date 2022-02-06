import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {StoreType} from "./redux/store"
import UsersContainer from "./components/Users/UsersContainer";

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

//import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";
import store, {AppStateType} from "./redux/redux-store";

export type AppType = {
    state: AppStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    dispatch: (store: StoreType, action: string) => void
}

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() =>{
                               return  <React.Suspense fallback={<div>Loading...</div>}>
                                   <DialogsContainer/>
                               </React.Suspense>}}/>

                    <Route path='/profile/:userId?'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <ProfileContainer/>
                               </React.Suspense>}}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer pageTitle={'Samurai'} />}/>
                    <Route path={'/login'}
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    initialized: state.app.initialized
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props: any) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;


