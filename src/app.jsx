import React, { useState, useEffect } from 'react';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import AddItemForm from './components/add-item-form';

import './app.css';

const App = props => {
  const [todoData, setTodoData] = useState([
    { label: 'Drink Coffee', important: false, id: 4, done: true },
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: false, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ]);
  const [maxID, setMaxID] = useState(100);

  useEffect(() => {
    // setTodoData(
    //   todoData.unshift({
    //     label: 'Drink Coffee',
    //     important: false,
    //     id: 5,
    //     done: false
    //   })
    // );
    console.log(todoData);
    //eslint-disable-next-line
  }, []);

  const deleteItem = id => {
    const inx = todoData.findIndex(el => el.id === id);
    const newArray = [...todoData.slice(0, inx), ...todoData.slice(inx + 1)];
    setTodoData(newArray);
  };

  const toggleProperty = (arr, id, propName) => {
    const inx = arr.findIndex(el => el.id === id);
    const oldItem = arr[inx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)];
  };

  const onToggleDone = id => {
    const tempArr = [...todoData];
    toggleProperty(tempArr, id, 'done');
    setTodoData(tempArr);
  };

  const onToggleImportant = id => {
    const tempArr = [...todoData];
    toggleProperty(tempArr, id, 'important');
    setTodoData(tempArr);
  };

  const addItem = text => {
    const newItem = {
      label: text,
      important: false,
      id: 1,
      done: false
    };
    const tempArr = [...todoData, newItem];
    console.log(newItem);
    setTodoData(tempArr);
  };
  console.log(todoData);
  const arrForCount = [...todoData];
  const doneCount = arrForCount.filter(el => el.done).length;
  const todoCount = arrForCount.length - doneCount;

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={todoData}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
        onDeleted={deleteItem}
      />

      <AddItemForm onAddedItem={addItem} />
    </div>
  );
};

export default App;
