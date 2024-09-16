import { DistributorAsideNav } from '../../components/DashboardAsideBar/DistributorAsideNav';
import styles from './index.module.css';
const DistributorDashboard = ()=> {
    return (
        <div className={styles['container']}>
            <DistributorAsideNav />
        </div>
    )
}

export default DistributorDashboard