import styles from '../styles/Card.module.css'

const Card = ({ title, temp, city, type = 'min' }) => {
    const modifier = `card__temp--${type}`

    return (
        <div className={styles.card}>
            <p className={styles.card__title}>{title}</p>

            <p className={`${styles.card__temp} ${styles[modifier]}`}>{temp ? parseInt(temp) + 'ºC' : 'N/A'}</p>
            <p className={styles.card__city}>Cidade: {city ? city : 'Nenhuma'}</p>
        </div>
    )
}

export default Card
