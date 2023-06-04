import React, { useContext } from "react";
import styles from "./ItemSetter.module.scss";
import { ItemsContext } from "../../App";
import { SomeValueContext } from "../../App";

const ItemSetter = ({ min = 0, max = 4 }) => {
  const { itemNum, setItemNum } = useContext(ItemsContext);
  const { someValue } = useContext(SomeValueContext);

  const checkNumber = (num, min, max) => {
    const refNum = isNaN(num) ? 0 : num;
    setItemNum(Math.max(Math.min(refNum, max), min));
  };

  return (
    <>
      <input
        type="number"
        onChange={(evt) => checkNumber(evt.target.value, min, max)}
        value={itemNum}
        className={styles.itemSetter}
        placeholder="Введите номер продукта..."
      />
      <p>{someValue}</p>
    </>
  );
};

export default ItemSetter;
