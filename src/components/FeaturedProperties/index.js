import classNames from 'classnames/bind';
import useFetch from '~/hooks/useFetch';
import localhost from '~/config';
import styles from './FeaturedProperties.module.scss';

const cx = classNames.bind(styles);

function FeaturedProperties() {
    const url = `${localhost}/hotels?featured=true&limit=4`;

    const { data, loading, error } = useFetch(url);
    return (
        <div className={cx('fp')}>
            {loading ? (
                'Loading'
            ) : (
                <>
                    {data.map((item, index) => (
                        <div className={cx('fpItem')} key={item._id}>
                            <img className={cx('fpImg')} src={item.photos[0]} alt="" />
                            <span className={cx('fpName')}>{item.name}</span>
                            <span className={cx('fpCity')}>{item.city}</span>
                            <span className={cx('fpPrice')}>Starting from {item.cheapestPrice}</span>
                            {item.rating && (
                                <div className={cx('fpRating')}>
                                    <button>{item.rating}</button>
                                    <span>Exceptional</span>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default FeaturedProperties;
