
import styles from './index.module.css'

const CustomMapPopUp = ()=> {
    return (
        <div className={styles['popupContainer']}>
            <img 
                src='https://via.placeholder.com/150' 
                alt='location'
                className='popupImage'
            />
            <div className={styles['popupContent']}>
                <h3 className={styles['popupTitle']}>Abuja, Nigeria</h3>
                <p className={styles['popupText']}>
                    This is a custom popup for Abuja. You can add any information here.
                </p>
                <button className={styles['popupButton']}>View Details</button>
            </div>
        </div>
    )
}

export default CustomMapPopUp;