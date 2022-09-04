import { useSelector } from 'react-redux';
import { useLogOutMutation } from 'redux/userLoginAuth';
import CSS from './userMenu.module.css'


export const UserMenu = () => {
    const name = useSelector(state => state.user.name);
    const [logOut] = useLogOutMutation();

    return (
        <div className=''>

            <p className={CSS.text}>Hi ,{name}</p>
            <button type="button" onClick={() => logOut()} className={CSS.button}>LogOut</button>
        </div>
    );
};