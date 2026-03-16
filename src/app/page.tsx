"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HomeBanner1 from '@/components/HomeBanner1/HomeBanner1'
import HomeBanner2 from '@/components/HomeBanner2/HomeBanner2'
import WorkoutSlider from '@/components/WorkoutSlider/WorkoutSlider'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeBanner1 />
      <WorkoutSlider />
      <HomeBanner2 />
    </main>
  )
}
