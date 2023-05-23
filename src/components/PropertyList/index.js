import classNames from 'classnames/bind';
import styles from './PropertyList.module.scss';
import localhost from '~/config';
import useFetch from '~/hooks/useFetch';

const cx = classNames.bind(styles);

function PropertyList() {
    const url = `${localhost}/hotels/countByType`;

    const { data, loading, error } = useFetch(url);

    const images = [
        'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
        'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=',
        'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=',
        'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=',
        'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=',
    ];
    return (
        <div className={cx('pList')}>
            {loading ? (
                'please wait loading'
            ) : (
                <>
                    {data &&
                        images.map((image, i) => (
                            <div key={i} className={cx('pListItem')}>
                                <img className={cx('pListImg')} src={image} alt="" />
                                <div className={cx('pListTitles')}>
                                    <h1>{data[i]?.type.toUpperCase()}</h1>
                                    <h2>
                                        {data[i]?.count} {data[i]?.type}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
}

export default PropertyList;
