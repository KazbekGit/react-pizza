import React, { useState } from "react";
import styles from "./TestPage.module.scss";

const TestPage = () => {

  const fruits = ["apple", "kiwi", "orange", "banana", "strawberry"];
  const [fruitIndex, setFruitIndex] = useState(0);

  const onFruitItemClick = (index) => {
    setFruitIndex(index);
  };

  const generateListItems = (numOfItems) => {
    return [...new Array(numOfItems)].map((_, index) => {
      return (
        <li key={index}>{index + 1}</li>
      )
    })
  }

  return (
    <> 
      <ul className={styles.fruitWrapper}>
        {fruits.map((fruit, index) => {
          return (
            <li
              onClick={() => {
                onFruitItemClick(index);
              }}
              className={index === fruitIndex ? `${styles.active}` : ""}
              key={fruit}
            >
              {fruit}
            </li>
          );
        })}
      </ul>
      <ul className={styles.paginationList}>
      {console.log(generateListItems(4))}
        {generateListItems(5)}
      </ul>
    </>
  );
};

export default TestPage;
