import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

import { useContext, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '~/context/SearchContext';
import { AuthContext } from '~/context/AuthContext';
const cx = classNames.bind(styles);

function Header({ type }) {
    const [destiantion, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({
            type: 'NEW_SEARCH',
            payload: {
                destiantion,
                dates,
                options,
            },
        });
        navigate('/hotels', { state: { destiantion, dates, options } });
    };
    return (
        <div className={cx('header')}>
            <div className={type === 'list' ? cx('headerContainer', 'listMode') : cx('headerContainer')}>
                <div className={cx('headerList')}>
                    <div className={cx('headerListItem', 'active')}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className={cx('headerListItem')}>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className={cx('headerListItem')}>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className={cx('headerListItem')}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className={cx('headerListItem')}>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== 'list' && (
                    <>
                        <h1 className={cx('headerTitle')}>A lifetime of discounts? It's Genius.</h1>
                        <p className={cx('headerDesc')}>
                            Get rewarded for your travels – unlock instant savings of 10% or more with a free
                            Lamabooking account
                        </p>
                        {!user && <button className={cx('headerBtn')}>Sign in / Register</button>}
                        <div className={cx('headerSearch')}>
                            <div className={cx('headerSearchItem')}>
                                <FontAwesomeIcon icon={faBed} className={cx('headerIcon')} />
                                <input
                                    type="text"
                                    placeholder="Where are you going"
                                    className={cx('headerSearchInput')}
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>
                            <div className={cx('headerSearchItem')}>
                                <FontAwesomeIcon icon={faCalendarDays} className={cx('headerIcon')} />
                                <span
                                    onClick={() => {
                                        setOpenDate(!openDate);
                                    }}
                                    className={cx('headerSearchText')}
                                >
                                    {`${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(
                                        dates[0].endDate,
                                        'dd/MM/yyyy',
                                    )}`}
                                </span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        minDate={new Date()}
                                        className={cx('date')}
                                    />
                                )}
                            </div>
                            <div className={cx('headerSearchItem')}>
                                <FontAwesomeIcon icon={faPerson} className={cx('headerIcon')} />
                                <span
                                    onClick={() => setOpenOptions(!openOptions)}
                                    className={cx('headerSearchText')}
                                >{`${options.adult} adult. ${options.children} children. ${options.room} room`}</span>
                                {openOptions && (
                                    <div className={cx('options')}>
                                        <div className={cx('optionItem')}>
                                            <span className={cx('optionText')}>Adult</span>
                                            <div className={cx('optionCount')}>
                                                <button
                                                    disabled={options.adult <= 1}
                                                    className={cx('optionCounterBtn')}
                                                    onClick={() => handleOption('adult', 'd')}
                                                >
                                                    -
                                                </button>
                                                <span className={cx('optionCounterNumber')}>{options.adult}</span>
                                                <button
                                                    className={cx('optionCounterBtn')}
                                                    onClick={() => handleOption('adult', 'i')}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className={cx('optionItem')}>
                                            <span className={cx('optionText')}>Children</span>
                                            <div className={cx('optionCount')}>
                                                <button
                                                    disabled={options.children <= 0}
                                                    className={cx('optionCounterBtn')}
                                                    onClick={() => handleOption('children', 'd')}
                                                >
                                                    -
                                                </button>
                                                <span className={cx('optionCounterNumber')}>{options.children}</span>
                                                <button
                                                    className={cx('optionCounterBtn')}
                                                    onClick={() => handleOption('children', 'i')}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className={cx('optionItem')}>
                                            <span className={cx('optionText')}>Room</span>
                                            <div className={cx('optionCount')}>
                                                <button
                                                    disabled={options.room <= 1}
                                                    className={cx('optionCounterBtn')}
                                                    onClick={() => handleOption('room', 'd')}
                                                >
                                                    -
                                                </button>
                                                <span className={cx('optionCounterNumber')}>{options.room}</span>
                                                <button
                                                    className={cx('optionCounterBtn')}
                                                    onClick={() => handleOption('room', 'i')}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={cx('headerSearchItem')}>
                                <button className={cx('headerBtn')} onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
