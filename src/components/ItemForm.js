import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit} ) {
  const [category, setCategory] = useState("Produce");
  const [product, setProduct] = useState("");

function storeProduct(event) {
  setProduct(event.target.value)
}

function storeCategory(event) {
  setCategory(event.target.value)
}

function newSubmission(event) {
  event.preventDefault();
    onItemFormSubmit( {
      id: uuid(), 
      name: product,
      category: category,
    });
    setProduct("");
    setCategory("Produce");
}

  return (
    <form onSubmit={newSubmission} className="NewItem">
      <label>
        Name:
        <input onChange={storeProduct} value={product} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={storeCategory} value={category} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
