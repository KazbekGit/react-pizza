import React from 'react'
import styles from './InfoSetter.module.scss'
import ItemSetter from '../ItemSetter'

const InfoSetter = () => {
  return (
    <div className={styles.wrapper}>
      <ItemSetter/>
    </div>
  )
}

export default InfoSetter