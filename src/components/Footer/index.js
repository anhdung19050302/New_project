import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('fLists')}>
                <ul className={cx('fList')}>
                    <li className={cx('fListItem')}>Countries</li>
                    <li className={cx('fListItem')}>Region</li>
                    <li className={cx('fListItem')}>Cities</li>
                    <li className={cx('fListItem')}>Districts</li>
                    <li className={cx('fListItem')}>Airport</li>
                    <li className={cx('fListItem')}>Hotels</li>
                </ul>
                <ul className={cx('fList')}>
                    <li className={cx('fListItem')}>Countries</li>
                    <li className={cx('fListItem')}>Region</li>
                    <li className={cx('fListItem')}>Cities</li>
                    <li className={cx('fListItem')}>Districts</li>
                    <li className={cx('fListItem')}>Airport</li>
                    <li className={cx('fListItem')}>Hotels</li>
                </ul>
                <ul className={cx('fList')}>
                    <li className={cx('fListItem')}>Countries</li>
                    <li className={cx('fListItem')}>Region</li>
                    <li className={cx('fListItem')}>Cities</li>
                    <li className={cx('fListItem')}>Districts</li>
                    <li className={cx('fListItem')}>Airport</li>
                    <li className={cx('fListItem')}>Hotels</li>
                </ul>
                <ul className={cx('fList')}>
                    <li className={cx('fListItem')}>Countries</li>
                    <li className={cx('fListItem')}>Region</li>
                    <li className={cx('fListItem')}>Cities</li>
                    <li className={cx('fListItem')}>Districts</li>
                    <li className={cx('fListItem')}>Airport</li>
                    <li className={cx('fListItem')}>Hotels</li>
                </ul>
                <ul className={cx('fList')}>
                    <li className={cx('fListItem')}>Countries</li>
                    <li className={cx('fListItem')}>Region</li>
                    <li className={cx('fListItem')}>Cities</li>
                    <li className={cx('fListItem')}>Districts</li>
                    <li className={cx('fListItem')}>Airport</li>
                    <li className={cx('fListItem')}>Hotels</li>
                </ul>
            </div>
            <div className={cx('fText')}>Copyright © 1996–2023 Booking.com™. All rights reserved.</div>
        </div>
    );
}

export default Footer;
