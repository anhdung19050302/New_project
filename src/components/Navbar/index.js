import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('navbar')}>
            <div className={cx('navContainer')}>
                <span className={cx('logo')}>D_Booking</span>
                <div className={cx('navItems')}>
                    <button className={cx('navButton')}>Register</button>
                    <button className={cx('navButton')}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
