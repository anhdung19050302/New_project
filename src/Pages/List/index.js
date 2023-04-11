import Header from '~/components/Header';
import Navbar from '~/components/Navbar';
import classNames from 'classnames/bind';
import styles from './List.module.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

const cx = classNames.bind(styles);

function List() {
    const location = useLocation();
    const [destiantion, setDestination] = useState(location.state.destiantion);

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState(location.state.date);

    const [options, setOptions] = useState(location.state.options);
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
                                {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(
                                    date[0].endDate,
                                    'dd/MM/yyyy',
                                )}`}
                            </span>
                            {openDate && (
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
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
                                    <input type="number" className={cx('lsOptionInput')} />
                                </div>
                                <div className={cx('lsOptionItem')}>
                                    <span className={cx('lsOptionText')}>
                                        Max price <small> per night</small>
                                    </span>
                                    <input type="number" className={cx('lsOptionInput')} />
                                </div>
                                <div className={cx('lsOptionItem')}>
                                    <span className={cx('lsOptionText')}>Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className={cx('lsOptionInput')}
                                        value={options.adult}
                                    />
                                </div>
                                <div className={cx('lsOptionItem')}>
                                    <span className={cx('lsOptionText')}>Children</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className={cx('lsOptionInput')}
                                        value={options.children}
                                    />
                                </div>
                                <div className={cx('lsOptionItem')}>
                                    <span className={cx('lsOptionText')}>Room</span>
                                    <input type="number" min={1} className={cx('lsOptionInput')} value={options.room} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className={cx('listResult')}></div>
                </div>
            </div>
        </div>
    );
}

export default List;
