import React, {useState, useEffect} from 'react'
import Categories from '../Categories'
import Sort from '../Sort'
import PizzaBlock from '../PizzaBlock'
import Skeleton from '../pizzaBlock/Skeleton'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const numOfSkeletonItems = 10

  useEffect(() => {
    fetch('https://64734751d784bccb4a3c6ab1.mockapi.io/items')
      .then(resp => resp.json())
      .then(items => {
        setPizzas(items)
        setIsLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? pizzas.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)
          : [...new Array(numOfSkeletonItems)].map((_, index) => (
              <Skeleton key={index} />
            ))}
      </div>
    </>
  )
}

export default Home
