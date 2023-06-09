import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Categories from '../Categories'
import Sort from '../Sort'
import PizzaBlock from '../PizzaBlock'
import Skeleton from '../pizzaBlock/Skeleton'
import styles from './Home.module.scss'
import { SearchContext } from '../../App'
import { setCategoryID } from '../redux/filterSlice'

import { useSelector } from 'react-redux'


const Home = () => {

  const categoryID = useSelector((state) => state.filter.categoryID)
  
  const sortType = useSelector((state) => state.filter.sortType)

  const { searchValue } = useContext(SearchContext)
  const [pizzas, setPizzas] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)

  const [categoryValue, setCategoryValue] = useState('Все')


  const numOfSkeletonItems = 10

  useEffect(() => {
    setIsLoaded(true)

    const sortBy = sortType.sortProperty.replace('-', '')
    const category = categoryID > 0 ? categoryID : ''
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

    fetch(
      `https://64734751d784bccb4a3c6ab1.mockapi.io/items?category=${category}&sortBy=${sortBy}&order=${order}`
    )
      .then(resp => resp.json())
      .then(items => {
        setPizzas(items)
        setIsLoaded(false)
      })
      .catch(err => console.log(err))
  }, [categoryID, sortType])
  return (
    <>
      <div className='content__top'>
        <Categories
          setCategoryValue={category => setCategoryValue(category)}
        />
        <Sort />
      </div>
      <h2 className='content__title'>{categoryValue}</h2>
      <div className='content__items'>
        {isLoaded
          ? [...new Array(numOfSkeletonItems)].map((_, index) => (
              <Skeleton key={index} />
            ))
          : pizzas
              .filter(pizza =>
                pizza.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
      <Link to='/test' className={styles.link}>
        Let's test
      </Link>
    </>
  )
}

export default Home
