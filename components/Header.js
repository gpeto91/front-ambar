import styles from '../styles/Header.module.css'

const Header = () => (
    <header className={styles.header}>
        <div className={styles.header__content}>
            <img src="/images/ambar-logo.png" />
        </div>
    </header>
)

export default Header