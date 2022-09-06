import styles from '../styles/Home.module.css'

const AboutPage = () => {
    return (
        <div>
            <h1  className={`${styles.text} font-effect-fire-animation`}>Про Нас</h1>
            <p className={styles.text}>Жирні бургери - це старі добрі бургери за класичною рецептурою, потрібними розмірами та за прийнятну ціну.</p>
            <p className={styles.text}>Готують їх на американський, мексиканський та італійський манер, не шкодуючи ні соусу, ні начинки.</p>
            <p className={styles.text}>Для тих, хто неабияк зголоднів, є неосяжний «Найжирніший бургер» з п'ятьма яловичими котлетами, кукурудзяними чіпсами та сиром.</p>

        </div>
    )
}

export default AboutPage