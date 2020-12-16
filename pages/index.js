import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next image</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org/docs/api-reference/next/image#layout">Next image feature!</a>
        </h1>
      </main>
      <h2 className={styles.title}>layout fill</h2>
      <div className={styles.container}>
        <Image
            src="https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg"
            alt="Picture of the author"
            layout="fill"
        />
      </div>
      <div className={styles.grid}>
      <div className={styles.card}>
        <p>Normal image (width and height) </p>
      <Image
            src="https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
      />
      </div>
      <div className={styles.card}>
        <p>Layout intrinsic </p>
      <Image
            src="https://cdn.pixabay.com/photo/2016/07/03/18/04/tech-1495181_1280.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            layout="intrinsic"
      />
      </div>
      <div className={styles.card}>
        <p>Layout fixed (not change as the viewport changes) </p>
      <Image
            src="https://cdn.pixabay.com/photo/2013/11/20/09/35/background-213649_1280.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            layout="fixed"
      />
      </div>
      <div className={styles.card}>
        <p>Layout fixed (not change as the viewport changes) </p>
      <Image
            src="https://cdn.pixabay.com/photo/2018/06/09/15/49/technology-3464633_1280.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            layout="responsive"
      />
      </div>
      
      </div>
    </div>
  )
}
