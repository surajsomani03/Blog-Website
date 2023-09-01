import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div>
        © Classic. All rights reserved.
        </div>
        <div className={styles.social}>
          <Image src="/1.png" height={15} width={15} className={styles.icon} alt='classic facebook' />
          <Image src="/2.png" height={15} width={15} className={styles.icon} alt='classic instagram' />
          <Image src="/3.png" height={15} width={15} className={styles.icon} alt='classic twitter' />
          <Image src="/4.png" height={15} width={15} className={styles.icon} alt='classic youtube' />
        </div>
    </div>
  )
}

export default Footer