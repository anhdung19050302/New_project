import classNames from 'classnames/bind';
import styles from './MaiiList.module.scss';

const cx = classNames.bind(styles);

function MailList() {
    return (
        <div className={cx('mail')}>
            <h1 className={cx('mailTitles')}>Save time, save money!</h1>
            <span className={cx('mailDesc')}>Sign up and we'll send the best deals to you</span>
            <div className={cx('mailInputContainer')}>
                <input type="text" placeholder="Your email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default MailList;
