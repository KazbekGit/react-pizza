import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../pizzaBlock/Skeleton";
import styles from './Home.module.scss'

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [categoryValue, setCategoryValue] = useState("Все");
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const numOfSkeletonItems = 10;

  useEffect(() => {
    setIsLoaded(true);

    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoryIndex > 0 ? categoryIndex : "";
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

    fetch(
      `https://64734751d784bccb4a3c6ab1.mockapi.io/items?category=${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((resp) => resp.json())
      .then((items) => {
        setPizzas(items);
        setIsLoaded(false);
      })
      .catch((err) => console.log(err));
  }, [categoryIndex, sortType]);
  return (
    <>
      <div className="content__top">
        <Categories
          categoryIndex={categoryIndex}
          setCategoryIndex={(index) => setCategoryIndex(index)}
          setCategoryValue={(category) => setCategoryValue(category)}
        />
        <Sort sortType={sortType} setSortType={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">{categoryValue}</h2>
      <div className="content__items">
        {isLoaded
          ? [...new Array(numOfSkeletonItems)].map((_, index) => (
              <Skeleton key={index} />
            ))
          : pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
      <Link to="/test" className={styles.link}>Let's test</Link>
    </>
  );
};

export default Home;
