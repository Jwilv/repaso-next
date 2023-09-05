import Head from 'next/head'
import styles from './MainLayout.module.css'

export const MainLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>HomePage</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}