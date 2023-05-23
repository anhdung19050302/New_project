import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { useContext } from 'react';
import { AuthContext } from '~/context/AuthContext';
const cx = classNames.bind(styles);

function Navbar() {
    const { user } = useContext(AuthContext);
    return (
        <div className={cx('navbar')}>
            <div className={cx('navContainer')}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <span className={cx('logo')}>D_Booking</span>
                </Link>
                {user ? (
                    user.username
                ) : (
                    <div className={cx('navItems')}>
                        <button className={cx('navButton')}>Register</button>
                        <button className={cx('navButton')}>Login</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
