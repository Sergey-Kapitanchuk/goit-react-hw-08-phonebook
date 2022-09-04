import React, { useState } from "react";
import { useSingUpMutation } from "redux/userLoginAuth";
import CSS from '../components/Form/Form.module.css'

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [login] = useState(true);
    const [singUp] = useSingUpMutation();

    const onSubmit = e => {
        e.preventDefault();
        singUp({ name, email, password, login });

        setEmail('');
        setPassword('');
        setName('');
    };


    const onChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'name':
                setName(value);
                break;
            default:
                return;
        }
    };
    return (
        <div className={CSS.section}>
            <form onSubmit={onSubmit} className={CSS.form}>
                <label className={CSS.formInput}>
                    name
                    <input
                        onChange={onChange}
                        value={name}
                        type="text"
                        name="name"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <label className={CSS.formInput}>
                    email
                    <input
                        onChange={onChange}
                        type="email"
                        value={email}
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={CSS.formInput}>
                    password
                    <input
                        onChange={onChange}
                        value={password}
                        type="password"
                        name="password"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>

                <button type="submit" className={CSS.buttonForm}>
                    register
                </button>
            </form>
        </div>

    );
};
