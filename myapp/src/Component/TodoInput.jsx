import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../state/todoListState';

export default function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodoList((oldList) => [
      ...oldList,
      {
        id: Date.now(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
