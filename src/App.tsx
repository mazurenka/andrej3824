import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";

import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateType, StoreType} from "./redux/store"
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    dispatch: (store: StoreType, action) => void
}

export const App = (props: AppPropsType) => {
    return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/users'}
                           render={()=> <UsersContainer/> }/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                </div>
            </div>
    )
}

export default App;
