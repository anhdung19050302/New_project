import classNames from 'classnames/bind';
import styles from './Featured.module.scss';

const cx = classNames.bind(styles);

function Featured() {
    return (
        <div className={cx('featured')}>
            <div className={cx('featuredItem')}>
                <img
                    className={cx('featuredImg')}
                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=STLjE-AZTMkAX9HYAMS&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDUMmEFRZwtwMG63F-v7ugCPbJ720kPyXYDd8uL4F8GIQ&oe=64370E76"
                    alt=""
                />
                <div className={cx('featuredTitles')}>
                    <h1>Nhi</h1>
                    <h2>Desc</h2>
                </div>
            </div>
            <div className={cx('featuredItem')}>
                <img
                    className={cx('featuredImg')}
                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=STLjE-AZTMkAX9HYAMS&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDUMmEFRZwtwMG63F-v7ugCPbJ720kPyXYDd8uL4F8GIQ&oe=64370E76"
                    alt=""
                />
                <div className={cx('featuredTitles')}>
                    <h1>Nhi</h1>
                    <h2>Desc</h2>
                </div>
            </div>
            <div className={cx('featuredItem')}>
                <img
                    className={cx('featuredImg')}
                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=STLjE-AZTMkAX9HYAMS&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDUMmEFRZwtwMG63F-v7ugCPbJ720kPyXYDd8uL4F8GIQ&oe=64370E76"
                    alt=""
                />
                <div className={cx('featuredTitles')}>
                    <h1>Nhi</h1>
                    <h2>Desc</h2>
                </div>
            </div>
        </div>
    );
}

export default Featured;
