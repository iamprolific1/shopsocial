
import { NavBar } from "../components/NavBar"
import LeftAside from '../components/asideNav/leftNav/LeftNav'
import RightAside from '../components/asideNav/rightNav/RightNav';
import MainFeed from '../components/MainContentFeed/MainFeed'
import styles from './index.module.css';

const LandingPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <LeftAside />
                <MainFeed />
                <RightAside />
            </div>
        </>
    );
}

export default LandingPage