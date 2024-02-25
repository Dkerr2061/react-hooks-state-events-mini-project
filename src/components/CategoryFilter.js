import React from "react";

function CategoryFilter({categories, onSelectCategory, selectedCategory}) {
  
const filteredCategories = categories.map( (category) => {
  return <button key={category} onClick={() => onSelectCategory(category)} className={category === selectedCategory ? 'selected' : ''}>{category}</button>
})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {filteredCategories}
    </div>
  );
}

export default CategoryFilter;
