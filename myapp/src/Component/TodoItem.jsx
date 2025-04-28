import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../state/todoListState';

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleCompletion = () => {
    const updatedList = todoList.map((todo) =>
      todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodoList(updatedList);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleCompletion}
      />
      <span style={{ textDecoration: item.isComplete ? 'line-through' : '' }}>
        {item.text}
      </span>
    </div>
  );
}
