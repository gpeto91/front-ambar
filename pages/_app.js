import { Provider } from 'react-redux'
import Header from '../components/Header'
import Head from 'next/head'

import '../styles/globals.css'
import store from "../store"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Ambar | Previsão do tempo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
