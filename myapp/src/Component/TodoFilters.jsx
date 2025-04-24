import React from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from '../state/todoListState';

export default function TodoFilters() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div>
      <button onClick={() => setFilter('All')} disabled={filter === 'All'}>All</button>
      <button onClick={() => setFilter('Completed')} disabled={filter === 'Completed'}>Completed</button>
      <button onClick={() => setFilter('Incomplete')} disabled={filter === 'Incomplete'}>Incomplete</button>
    </div>
  );
}
