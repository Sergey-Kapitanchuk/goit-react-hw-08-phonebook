import React, { useState } from "react";
import { useLoginMutation } from "redux/userLoginAuth";
import CSS from '../components/Form/Form.module.css'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useLoginMutation();

    const onSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
        setEmail("");
        setPassword("");
    }

    const onChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default: return;
        }
    };

    return (
        <div className={CSS.section}>
            <form onSubmit={onSubmit} className={CSS.form}>
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
                    submit
                </button>
            </form>
        </div>
    )
}