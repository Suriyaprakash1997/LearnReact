import React, { useState } from "react";

function ItemListManager() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    const trimmedText = itemText.trim();
    if (!trimmedText) {
        alert("Please enter a valid item.");
        return;
    }

    const isDuplicate = items.some(
      (item, idx) => item.text.toLowerCase() === trimmedText.toLowerCase() && idx !== editIndex
    );

    if (isDuplicate) {
      alert("Item already exists!");
      return;
    }

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex].text = trimmedText;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, { text: trimmedText, checked: false }]);
    }

    setItemText("");
  };

  const handleEdit = (index) => {
    setItemText(items[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = items.filter(( _,i) => i !== index);
    setItems(updated);
    if (editIndex === index) {
      setItemText("");
      setEditIndex(null);
    }
  };

  const toggleCheckbox = (index) => {
    const updated = [...items];
    updated[index].checked = !updated[index].checked;
    setItems(updated);
  };

  return (
    <div className="container mt-4">
        <h5>Item List Manager</h5>
        <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
        <input type="text"
          className="form-control"
          placeholder="Enter item"
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddOrUpdate}>
          OK
        </button></div>

      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
            <div>
              <input
                type="checkbox"
                className="me-2"
                checked={item.checked}
                onChange={() => toggleCheckbox(index)}
              />
               <span>{item.text}</span>
            </div>
            <div>
              <button
                className="btn btn-secondary me-2"
                size="sm"
                onClick={() => handleEdit(index)}
              >
               <i className="bi bi-pencil-square"></i>
              </button>
              <button
                 className="btn btn-danger me-2"
                size="sm"
                onClick={() => handleDelete(index)}
              >
               <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
