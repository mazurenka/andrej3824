import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css';

export type MapPropsType = {}

export const Header: React.FC<MapPropsType> = (props) => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    const {Header} = Layout

    return <header className={s.header}>
        <div>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5N9H84BlUK8bkFMOdtEP6km4nqGKWcLBZQ&usqp=CAU'}/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
        </div>
    </header>
}
export default Header;