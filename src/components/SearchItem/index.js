import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem({ item }) {
    return (
        <div className={cx('searchItem')}>
            <img src={item.photos[0]} alt="" className={cx('siImg')} />
            <div className={cx('siDesc')}>
                <h1 className={cx('siTitle')}>{item.name}</h1>
                <span className={cx('siDistance')}>{item.distance}m from center</span>
                <span className={cx('siTaxiOp')}>Free airport taxi</span>
                <span className={cx('siSubtitle')}>Studio Apartment with Air conditioning</span>
                <span className={cx('siFeatures')}>{item.desc}</span>
                <span className={cx('siCancelOp')}>Free cancellation </span>
                <span className={cx('siCancelOpSubtitle')}>
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className={cx('siDetail')}>
                {item.rating && (
                    <div className={cx('siRating')}>
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>
                )}
                <div className={cx('siDetailTexts')}>
                    <span className={cx('siPrice')}>${item.cheapestPrice}</span>
                    <span className={cx('siTaxOp')}>Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className={cx('siCheckButton')}>See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;
