import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../state/todoListState';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
