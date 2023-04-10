import classNames from 'classnames/bind';
import styles from './PropertyList.module.scss';
const cx = classNames.bind(styles);

function PropertyList() {
    return (
        <div className={cx('pList')}>
            <div className={cx('pListItem')}>
                <img
                    className={cx('pListImg')}
                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=STLjE-AZTMkAX9HYAMS&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDUMmEFRZwtwMG63F-v7ugCPbJ720kPyXYDd8uL4F8GIQ&oe=64370E76"
                    alt=""
                />
                <div className={cx('pListTitles')}>
                    <h1>Hotel</h1>
                    <h2>Title</h2>
                </div>
            </div>
            <div className={cx('pListItem')}>
                <img
                    className={cx('pListImg')}
                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=STLjE-AZTMkAX9HYAMS&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDUMmEFRZwtwMG63F-v7ugCPbJ720kPyXYDd8uL4F8GIQ&oe=64370E76"
                    alt=""
                />
                <div className={cx('pListTitles')}>
                    <h1>Hotel</h1>
                    <h2>Title</h2>
                </div>
            </div>
            {/* <div className={cx('pListItem')}>
                <img
                    className={cx('pListImg')}
                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=STLjE-AZTMkAX9HYAMS&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDUMmEFRZwtwMG63F-v7ugCPbJ720kPyXYDd8uL4F8GIQ&oe=64370E76"
                    alt=""
                />
                <div className={cx('pListTitles')}>
                    <h1>Hotel</h1>
                    <h2>Title</h2>
                </div>
            </div> */}
            <div className={cx('pListItem')}>
                <img
                    className={cx('pListImg')}
                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=STLjE-AZTMkAX9HYAMS&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDUMmEFRZwtwMG63F-v7ugCPbJ720kPyXYDd8uL4F8GIQ&oe=64370E76"
                    alt=""
                />
                <div className={cx('pListTitles')}>
                    <h1>Hotel</h1>
                    <h2>Title</h2>
                </div>
            </div>
            <div className={cx('pListItem')}>
                <img
                    className={cx('pListImg')}
                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=STLjE-AZTMkAX9HYAMS&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDUMmEFRZwtwMG63F-v7ugCPbJ720kPyXYDd8uL4F8GIQ&oe=64370E76"
                    alt=""
                />
                <div className={cx('pListTitles')}>
                    <h1>Hotel</h1>
                    <h2>Title</h2>
                </div>
            </div>
        </div>
    );
}

export default PropertyList;
