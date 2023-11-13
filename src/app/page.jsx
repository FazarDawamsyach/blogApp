import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/il_1.png'
import Button from '@/components/button/button'

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>I just started with Next.Js In October 20th 2023 completed in November 3rd 2023</h1>
      <p className={styles.desc}>By following YT:Lama Dev, So far so good! But i know code can be a drag, so lets keep motivated!</p>
      <Button url="/portfolio" text="See for yourself!"/>
      
    </div>
    <div className={styles.item}>
    <Image src={Hero} alt="Hero" className={styles.img}/>

    </div>
    </div>
  )
}
