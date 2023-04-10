import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Navbar from '~/components/Navbar';
import Header from '~/components/Header';
import Featured from '~/components/Featured';
import PropertyList from '~/components/PropertyList';
import FeaturedProperties from '~/components/FeaturedProperties';
import MailList from '~/components/MailList';
import Footer from '~/components/Footer';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className={cx('homeContainer')}>
                <Featured />
                <h1 className={cx('homeTitle')}>Browse by property type</h1>
                <PropertyList />
                <h1 className={cx('homeTitle')}>Home guest love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
