// state/todoListState.js
import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const filterState = atom({
  key: 'filterState', // unique ID (with respect to other atoms/selectors)
  default: 'All', // default value (aka initial value)
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Completed':
        return list.filter((item) => item.isComplete);
      case 'Incomplete':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
