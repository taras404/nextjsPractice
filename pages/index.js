import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Жирні Бургери | Головна</title>
      <meta name="title" content="Жирні бургери"/>
    </Head>
    <div className={styles.container} >
      <h1 className={`${styles.text} font-effect-fire-animation`}>Головна</h1>
      <div className={styles.mainImage}>
        <Image src='/fatburger.png' alt='fat burger' width={400} height={300}/>
      </div>
      <p className={styles.text}>Що таке ідеальний бургер? Лист свіжого салату, м'які булочки, соковите м'ясо. Про інші складові начинки можна посперечатися, адже це справа смаку.</p>
        <p className={styles.text}>Є ще кілька факторів, що впливають на апетит: ціни, якість обслуговування, правильна атмосфера закладу.</p>

      <Link href="/burgers"><a className={styles.btn}>Всі Бургери</a></Link>

    </div>
    </>
  )
}
