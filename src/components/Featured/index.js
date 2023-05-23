import classNames from 'classnames/bind';
import styles from './Featured.module.scss';
import localhost from '~/config';
import useFetch from '~/hooks/useFetch';

const cx = classNames.bind(styles);

function Featured() {
    const url = `${localhost}/hotels/countByCiTy?cities=HCM,HN,HUE`;

    const { data, loading, error } = useFetch(url);

    return (
        <div className={cx('featured')}>
            {loading ? (
                'loading please wait'
            ) : (
                <>
                    <div className={cx('featuredItem')}>
                        <img
                            className={cx('featuredImg')}
                            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                            alt=""
                        />
                        <div className={cx('featuredTitles')}>
                            <h1>HCM</h1>
                            <h2>{data[0]} hotel</h2>
                        </div>
                    </div>
                    <div className={cx('featuredItem')}>
                        <img
                            className={cx('featuredImg')}
                            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                            alt=""
                        />
                        <div className={cx('featuredTitles')}>
                            <h1>HN</h1>
                            <h2>{data[1]} hotel</h2>
                        </div>
                    </div>
                    <div className={cx('featuredItem')}>
                        <img
                            className={cx('featuredImg')}
                            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                            alt=""
                        />
                        <div className={cx('featuredTitles')}>
                            <h1>HUE</h1>
                            <h2>{data[2]} hotel</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Featured;
