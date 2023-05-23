import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '~/context/AuthContext';
import axios from 'axios';
import localhost from '~/config';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const [credentials, setCredentals] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCredentals((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post(`${localhost}/auth/login`, credentials);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
            navigate('/');
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
        }
    };

    return (
        <div className={cx('login')}>
            <div className={cx('lContainer')}>
                <input
                    type="text"
                    className={cx('lInput')}
                    id="username"
                    placeholder="username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className={cx('lInput')}
                    id="password"
                    placeholder="password"
                    onChange={handleChange}
                />
                <button disabled={loading} onClick={handleClick} className={cx('lButton')}>
                    Login
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
}

export default Login;
