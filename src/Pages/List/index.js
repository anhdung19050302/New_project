import Header from '~/components/Header';
import Navbar from '~/components/Navbar';
import classNames from 'classnames/bind';
import styles from './List.module.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '~/components/SearchItem';
import localhost from '~/config';
import useFetch from '~/hooks/useFetch';

const cx = classNames.bind(styles);

function List() {
    const location = useLocation();
    const [destiantion, setDestination] = useState(location.state.destiantion);

    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState(location.state.dates);

    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(
        `${localhost}/hotels?city=${destiantion}&min=${min || 0}&max=${max || 999}`,
    );

    const handleClick = () => {
        reFetch();
    };
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className={cx('listContainer')}>
                <div className={cx('listWrapper')}>
                    <div className={cx('listSearch')}>
                        <h1 className={cx('listTitle')}>Search</h1>
                        <div className={cx('lsItem')}>
                            <label>Destination</label>
                            <input type="text" value={destiantion} onChange={(e) => setDestination(e.target.value)} />
                        </div>
                        <div className={cx('lsItem')}>
                            <label>Check-in-date</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(
                                    dates[0].endDate,
                                    'dd/MM/yyyy',
                                )}`}
                            </span>
                            {openDate && (
                                <DateRange
                                    className={cx('date')}
                                    editableDateInputs={true}
                                    onChange={(item) => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    minDate={new Date()}
                                />
                            )}
                        </div>
                        <div className={cx('lsItem')}>
                            <label>Options</label>
                            <div className={cx('lsOptions')}>
                                <div className={cx('lsOptionItem')}>
                                    <span className={cx('lsOptionText')}>
                                        Min price <small> per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        className={cx('lsOptionInput')}
                                        onChange={(e) => setMin(e.target.value)}
                                    />
                                </div>
                                <div className={cx('lsOptionItem')}>
                                    <span className={cx('lsOptionText')}>
                                        Max price <small> per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        className={cx('lsOptionInput')}
                                        onChange={(e) => setMax(e.target.value)}
                                    />
                                </div>
                                <div className={cx('lsOptionItem')}>
                                    <span className={cx('lsOptionText')}>Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className={cx('lsOptionInput')}
                                        value={options.adult}
                                        onChange={(e) => setOptions((prev) => ({ ...prev, adult: e.target.value }))}
                                    />
                                </div>
                                <div className={cx('lsOptionItem')}>
                                    <span className={cx('lsOptionText')}>Children</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className={cx('lsOptionInput')}
                                        value={options.children}
                                        onChange={(e) => setOptions((prev) => ({ ...prev, children: e.target.value }))}
                                    />
                                </div>
                                <div className={cx('lsOptionItem')}>
                                    <span className={cx('lsOptionText')}>Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className={cx('lsOptionInput')}
                                        value={options.room}
                                        onChange={(e) => setOptions((prev) => ({ ...prev, room: e.target.value }))}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className={cx('listResult')}>
                        {loading ? (
                            'Loading'
                        ) : (
                            <>
                                {data.map((item) => (
                                    <SearchItem item={item} key={item._id} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
