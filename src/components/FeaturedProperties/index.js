import classNames from 'classnames/bind';
import styles from './FeaturedProperties.module.scss';

const cx = classNames.bind(styles);

function FeaturedProperties() {
    return (
        <div className={cx('fp')}>
            <div className={cx('fpItem')}>
                <img
                    className={cx('fpImg')}
                    src="https://r-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o="
                    alt=""
                />
                <span className={cx('fpName')}>Aparthotel Stare Miasto</span>
                <span className={cx('fpCity')}>Old Town, Poland, Kraków</span>
                <span className={cx('fpPrice')}>Starting from VND 2,300,000</span>
                <div className={cx('fpRating')}>
                    <button>8.9</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className={cx('fpItem')}>
                <img
                    className={cx('fpImg')}
                    src="https://r-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o="
                    alt=""
                />
                <span className={cx('fpName')}>Aparthotel Stare Miasto</span>
                <span className={cx('fpCity')}>Old Town, Poland, Kraków</span>
                <span className={cx('fpPrice')}>Starting from VND 2,300,000</span>
                <div className={cx('fpRating')}>
                    <button>8.9</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className={cx('fpItem')}>
                <img
                    className={cx('fpImg')}
                    src="https://r-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o="
                    alt=""
                />
                <span className={cx('fpName')}>Aparthotel Stare Miasto</span>
                <span className={cx('fpCity')}>Old Town, Poland, Kraków</span>
                <span className={cx('fpPrice')}>Starting from VND 2,300,000</span>
                <div className={cx('fpRating')}>
                    <button>8.9</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className={cx('fpItem')}>
                <img
                    className={cx('fpImg')}
                    src="https://r-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o="
                    alt=""
                />
                <span className={cx('fpName')}>Aparthotel Stare Miasto</span>
                <span className={cx('fpCity')}>Old Town, Poland, Kraków</span>
                <span className={cx('fpPrice')}>Starting from VND 2,300,000</span>
                <div className={cx('fpRating')}>
                    <button>8.9</button>
                    <span>Exceptional</span>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProperties;
