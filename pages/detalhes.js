import Link from 'next/link'
import styles from '../styles/Details.module.css'
import { minmax } from '../store/slices/minmaxSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import Card from '../components/Card'

const Detalhes = () => {
    const { min, max } = useSelector(minmax)

    return (
        <div className="container">
            <nav className={styles.navigation}>
                <div className={styles.navigation__content}>
                    <Link href="/">
                        <button className="app_button" >&lt; Voltar</button>
                    </Link>
                </div>
            </nav>

            <main className="main" padding="true">
                <div className={styles.content}>
                    {!min.name && <p className={styles['info-text']}>Percorra os marcadores na tela anterior para obter as temperaturas mínimas e máximas observadas</p>}

                    <div className={styles.wrapper}>
                        <Card title="Temperatura Mínima" temp={min.temp} city={min.name} type="min" />
                        <Card title="Temperatura Máxima" temp={max.temp} city={max.name} type="max" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Detalhes