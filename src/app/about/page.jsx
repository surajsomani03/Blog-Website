import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt='' className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ducimus doloremque mollitia neque! Molestias asperiores aliquid obcaecati quibusdam esse, cum aspernatur id soluta sint provident quia quidem dolores nisi natus ipsam dignissimos praesentium, distinctio dicta accusantium? Vero, perferendis assumenda sapiente facere cum ipsa delectus amet ea. Enim reiciendis ullam ipsum tempore inventore, doloribus accusamus dolore, cum ducimus aspernatur architecto! Dolores esse necessitatibus officia vitae expedita repellat? 
            <br/><br/>
            Iure vel eaque sit aspernatur dolor, beatae expedita alias earum minima odio architecto consequatur impedit reprehenderit corrupti nemo dolorem provident laborum. Fuga inventore possimus aut fugiat obcaecati eligendi quis nisi numquam dolore, harum tempore rem architecto tenetur ut sed saepe, quod dicta. Quaerat fugit sed voluptatum, minus quisquam magni praesentium pariatur veritatis dolorem aspernatur ratione nisi fugiat aliquam ducimus tempore corporis quas iure delectus! Dolorum nihil fuga eveniet omnis? 
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>
            <h1>What We Do?</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem voluptate sequi fugiat, ipsum beatae assumenda laborum earum dolore aspernatur, libero et eaque voluptas quas. Excepturi ut ad sed molestias beatae dicta aliquam porro tempore animi magni. Aperiam cumque nemo magni!
            - Creative Illustartion
              <br/><br/>- Dynamic Websites
              <br/><br/>- Fast And Handy Mobile 
            </p>
            <br/><br/>
            <Button url="/contact" text="Contact"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About