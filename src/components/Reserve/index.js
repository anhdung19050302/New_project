import classNames from 'classnames/bind';
import styles from './Reserve.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '~/hooks/useFetch';
import localhost from '~/config';
import { useContext, useState } from 'react';
import { SearchContext } from '~/context/SearchContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Reserve({ setOpen, hotelId }) {
    const [selectedRooms, setSelectedRoom] = useState([]);
    const { data, loading, error } = useFetch(`${localhost}/hotels/room/${hotelId}`);

    const { dates } = useContext(SearchContext);
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        const list = [];
        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return list;
    };
    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
    console.log(alldates);
    const isAvailble = (roomNumber) => {
        const isFound = roomNumber.unavaibleDates.some((date) => alldates.includes(new Date(date).getTime()));
        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRoom(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value));
    };
    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`${localhost}/rooms/availability/${roomId}`, { dates: alldates });
                    return res.data;
                }),
            );
            setOpen(false);
            navigate('/');
        } catch (err) {}
    };
    return (
        <div className={cx('reserve')}>
            <div className={cx('rContainer')}>
                <FontAwesomeIcon icon={faCircleXmark} className={cx('rClose')} onClick={() => setOpen(false)} />
                <span>Select your rooms:</span>
                {data.map((item) => (
                    <div className={cx('rItem')} key={item._id}>
                        <div className={cx('rItemInfo')}>
                            <div className={cx('rTitle')}>{item.title}</div>
                            <div className={cx('rDesc')}>{item.desc}</div>
                            <div className={cx('rMax')}>
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className={cx('rPrice')}>{item.price}</div>
                        </div>
                        <div className={cx('rSelectRooms')}>
                            {item.roomNumbers.map((roomNumber, index) => (
                                <div className={cx('room')} key={index}>
                                    <label>{roomNumber.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomNumber._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailble(roomNumber)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className={cx('rButton')}>
                    Reserve Now!
                </button>
            </div>
        </div>
    );
}

export default Reserve;
