import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {StoreType} from "./redux/store"
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

export type AppType = {
    state: AppStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    dispatch: (store: StoreType, action: string) => void
}

class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occurred")
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                    <Switch>

                        <Route path='/'
                               render={() => <Redirect to={'profile'}/>}/>

                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>

                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>

                        <Route path={'/users'}
                               render={() => <UsersContainer pageTitle={'Samurai'}/>}/>

                        <Route path={'/login'}
                               render={() => <LoginPage/>}/>

                        <Route path={'*'}
                               render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

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


