import React, { useState } from 'react';

function FruitCheckboxList() {
  const [fruits, setFruits] = useState([
    { id: 1, name: 'Apple', checked: false },
    { id: 2, name: 'Banana', checked: true },
    { id: 3, name: 'Orange', checked: false },
    { id: 4, name: 'Mango', checked: true }
  ]);

  const handleCheckboxChange = (id) => {
    const updatedFruits = fruits.map(fruit =>
      fruit.id === id ? { ...fruit, checked: !fruit.checked } : fruit
    );
    setFruits(updatedFruits);
  };

  return (
    <div>
      <h2>Fruit Selection</h2>
      {fruits.map((fruit) => (
        <label key={fruit.id} style={{ display: 'block', marginBottom: '5px' }}>
          <input
            type="checkbox"
            checked={fruit.checked}
            onChange={() => handleCheckboxChange(fruit.id)}
          />
          {fruit.name}
        </label>
      ))}
      <pre>{JSON.stringify(fruits, null, 2)}</pre> 
    </div>
  );
}

export default FruitCheckboxList;
