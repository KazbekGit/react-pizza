import React, { useState } from "react";
import styles from "./TestPage.module.scss";

const TestPage = () => {
  const fruits = ["apple", "kiwi", "orange", "banana", "strowberry"];
  const [fruitIndex, setFruitIndex] = useState(0)

  const onFruitItemClick = (index) => {
    setFruitIndex(index)
  }

  return (
    <>
      <ul className={styles.fruitWrapper}>
        {fruits.map((fruit, index) => {
          return (
            <li onClick={()=>{onFruitItemClick(index)}} className={index == fruitIndex ? `${styles.active}` : '' } key={fruit}>
              {fruit}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TestPage;
