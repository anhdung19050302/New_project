import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <div className={cx('searchItem')}>
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/444777951.webp?k=21d6f768fa4f26821ff8071e68f8e47d22b322a8aba03922432249557b05c8f1&o=&s=1"
                alt=""
                className={cx('siImg')}
            />
            <div className={cx('siDesc')}>
                <h1 className={cx('siTitle')}>Tower Street Apartments</h1>
                <span className={cx('siDistance')}>500m from center</span>
                <span className={cx('siTaxiOp')}>Free airport taxi</span>
                <span className={cx('siSubtitle')}>Studio Apartment with Air conditioning</span>
                <span className={cx('siFeatures')}>Entire studio • 1 bathroom • 21m² 1 full bed</span>
                <span className={cx('siCancelOp')}>Free cancellation </span>
                <span className={cx('siCancelOpSubtitle')}>
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className={cx('siDetail')}>
                <div className={cx('siRating')}>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className={cx('siDetailTexts')}>
                    <span className={cx('siPrice')}>$112</span>
                    <span className={cx('siTaxOp')}>Includes taxes and fees</span>
                    <button className={cx('siCheckButton')}>See availability</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;
