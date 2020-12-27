import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Hello from '../components/hello';
// import dynamic from 'next/dynamic';
import Link from 'next/link';


// const DynamicHello = dynamic(import('../components/hello'));

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          学习<a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/posts/first-post">first-post</Link>
        <Hello></Hello>
        {/* <DynamicHello></DynamicHello> */}

      </main>

    </div>
  )
}
