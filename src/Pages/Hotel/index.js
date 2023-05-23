import classNames from 'classnames/bind';
import styles from './Hotel.module.scss';
import Navbar from '~/components/Navbar';
import Header from '~/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '~/components/MailList';
import Footer from '~/components/Footer';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '~/hooks/useFetch';
import localhost from '~/config';
import { SearchContext } from '~/context/SearchContext';
import { AuthContext } from '~/context/AuthContext';
import Reserve from '~/components/Reserve';

const cx = classNames.bind(styles);

function Hotel() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const [sildeNumber, setSildeNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const { data, loading, error } = useFetch(`${localhost}/hotels/find/${id}`);

    const { dates, options } = useContext(SearchContext);
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    const handleOpen = (i) => {
        setSildeNumber(i);
        setOpen(true);
    };
    const handleMove = (actions) => {
        let newSliderNumber;
        if (actions === 'l') {
            newSliderNumber = sildeNumber === 0 ? 5 : sildeNumber - 1;
        } else {
            newSliderNumber = sildeNumber === 5 ? 0 : sildeNumber + 1;
        }
        setSildeNumber(newSliderNumber);
    };
    const handleClick = () => {
        if (user) {
            setOpenModal(true);
        } else {
            navigate('/login');
        }
    };
    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? (
                'Loading'
            ) : (
                <>
                    <div className={cx('hotelContainer')}>
                        {open && (
                            <div className={cx('slider')}>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    className={cx('close')}
                                    onClick={() => setOpen(false)}
                                />
                                <FontAwesomeIcon
                                    icon={faCircleArrowLeft}
                                    className={cx('arrow')}
                                    onClick={() => handleMove('l')}
                                />
                                <div className={cx('sliderWrapper')}>
                                    <img src={data.photos[sildeNumber]} alt="" className={cx('sliderImg')} />
                                </div>
                                <FontAwesomeIcon
                                    icon={faCircleArrowRight}
                                    className={cx('arrow')}
                                    onClick={() => handleMove('r')}
                                />
                            </div>
                        )}
                        <div className={cx('hotelWrapper')}>
                            <button className={cx('bookNow')}>Reserve or Book Now</button>
                            <h1 className={cx('hotelTitle')}>{data?.name}</h1>
                            <div className={cx('hotelAddress')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>1150 VietNam</span>
                            </div>
                            <span className={cx('hotelDistance')}>Excellent location {data.distance}m from center</span>
                            <span className={cx('hotelPriceHighlight')}>
                                Book a stay over $114 at this property and get a free airport taxi
                            </span>
                            <div className={cx('hotelImages')}>
                                {data.photos?.map((photo, i) => (
                                    <div className={cx('hotelImgWrapper')} key={i}>
                                        <img
                                            onClick={() => handleOpen(i)}
                                            src={photo}
                                            alt=""
                                            className={cx('hotelImg')}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className={cx('hotelDetails')}>
                                <div className={cx('hotelDetailsTexts')}>
                                    <h1 className={cx('hotelTitle')}>{data.title}</h1>
                                    <p className={cx('hotelDesc')}>{data.desc}</p>
                                </div>
                                <div className={cx('hotelDetailsPrice')}>
                                    <h1>Perfect for a {days}-night stay!</h1>
                                    <span>
                                        Located in the real heart of Krakow, this property has an excellent location
                                        score of 9.8!
                                    </span>
                                    <h2>
                                        <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                                    </h2>
                                    <button onClick={handleClick}>Reserve or Book Now!</button>
                                </div>
                            </div>
                        </div>
                        <MailList />
                        <Footer />
                    </div>
                </>
            )}

            {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
        </div>
    );
}

export default Hotel;
