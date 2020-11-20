import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'

function Home({ token }) {
  const [ newToken, reloadToken ] = useState(token)

  const fetchData = async () => {
    const response = await axios.get(
      'https://5dct0wxvh9.execute-api.us-east-1.amazonaws.com/default/token_generator',
      {
        headers:{
        'Access-Control-Allow-Origin': '*',
        }
      }
    )
    return reloadToken(response.token)
  }

  const handleClick = (event) => {
    event.preventDefault()

    fetchData()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Token CoastHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Token <a href="#">Coast Hub</a>
        </h1>
        <p className={styles.description}>
          Envie este token ao cliente &rarr; {' '}
          
          <code className={styles.code}>{ newToken }</code>
        </p>

        <div className={styles.grid}>
          <button className={styles.card} onClick={handleClick}>
            <h3>Gerar Token &rarr;</h3>
            <p>Este token é válido para a criação de conta por apenas um usuário.</p>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await axios.get(
    'https://5dct0wxvh9.execute-api.us-east-1.amazonaws.com/default/token_generator'
  )

  return { token: response.data }
}

export default Home
