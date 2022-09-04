import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import CSS from './navigation.module.css'


export const Navigation = () => {
    const isLogin = useSelector(state => state.user.isLogin);
    console.log(isLogin)
    return (
        <>
            <nav className={CSS.navigation}>
                {!isLogin && (
                    <>
                        <NavLink to="/login" className={CSS.navLink}>login</NavLink>
                        <NavLink to="/register" className={CSS.navLink}>Register</NavLink>
                    </>
                )}

                {isLogin && (
                    <>
                        <UserMenu />
                    </>
                )}
            </nav>
            <Outlet />
        </>
    );
}