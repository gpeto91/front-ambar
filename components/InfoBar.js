
import { motion } from 'framer-motion'
import { reset } from '../store/slices/weatherSlice'
import { useDispatch } from 'react-redux'

import styles from '../styles/InfoBar.module.css'

const InfoBar = ({ city, current, min, max }) => {
    const dispatch = useDispatch()

    return (
        <motion.div className={styles.details} animate={{ bottom: city ? 0 : '-100%' }}>
            <div className={styles.details__content}>
                <div className={styles.details__close} onClick={() => dispatch(reset())}>X</div>

                <h2 className={styles.details__title}>{city}</h2>

                <div className={styles['details__temps-wrapper']}>
                    <div className={styles['details__temps-item']}>
                        <p>Atual</p>
                        <p>{current ? parseInt(current) + 'ºC' : 'N/A'}</p>
                    </div>

                    <div className={styles['details__temps-item']}>
                        <p>Min</p>
                        <p>{min ? parseInt(min) + 'ºC' : 'N/A'}</p>
                    </div>

                    <div className={styles['details__temps-item']}>
                        <p>Max</p>
                        <p>{max ? parseInt(max) + 'ºC' : 'N/A'}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default InfoBar