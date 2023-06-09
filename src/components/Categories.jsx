import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCategoryID } from "./redux/filterSlice";

const Categories = ({setCategoryValue}) => {

  const categoryID = useSelector((state) => state.filter.categoryID)
  const dispatch = useDispatch()

  const categories = [
    'Все',
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onCategoryClick = (index) => {
    dispatch(setCategoryID(index))
    setCategoryValue(categories[index])
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li onClick={() => onCategoryClick(index)} key={index} className={categoryID === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
