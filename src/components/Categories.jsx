import React, { useState } from "react";

const Categories = ({categoryIndex, setCategoryIndex, setCategoryValue}) => {

  const categories = [
    'Все',
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onCategoryClick = (index) => {
    setCategoryIndex(index)
    setCategoryValue(categories[index])
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li onClick={() => onCategoryClick(index)} key={index} className={categoryIndex == index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
