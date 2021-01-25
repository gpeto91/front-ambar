import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { currentCity, update } from '../store/slices/weatherSlice'
import InfoBar from '../components/InfoBar'
import dynamic from 'next/dynamic'
import { minmax, updateMin, updateMax } from '../store/slices/minmaxSlice'

import { motion } from 'framer-motion'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'

export default function Home() {
  const dispatch = useDispatch()
  const { city } = useSelector(currentCity)
  const { min, max } = useSelector(minmax)

  useEffect(() => {
    if (city.name) {
      if (!min.temp || city.min < min.temp) {
        dispatch(updateMin({ name: city.name, temp: city.min }))
      }

      if (!max.temp || city.max > max.temp) {
        dispatch(updateMax({ name: city.name, temp: city.max }))
      }
    }
  }, [city])

  const Map = useMemo(
    () => dynamic(
      () => import('../components/Map'), 
      { ssr: false }
    ), [])

  const handleMap = data => {
    dispatch(update(data))
  }

  return (
    <motion.div layoutId="page" className="container">
      <aside className={styles.description}>
        <div className={styles.description__content}>
          <p>Clique em um marcador da cidade desejada para acessar detalhes da temperatura</p>
          <Link href="/detalhes">
            <button className="app_button">Cº Min/Max</button>
          </Link>
        </div>
      </aside>

      <main className="main">
        <div style={{ flex: 1 }}>
          <Map updateCity={handleMap} />
        </div>
      </main>

      <InfoBar city={city.name} current={city.current} min={city.min} max={city.max} />
    </motion.div>
  )
}
