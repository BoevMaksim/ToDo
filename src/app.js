import React, {useState} from 'react';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import AddItemForm from './components/add-item-form';

import './app.css';

const App = () => {

   const [todoData, setTodoData] = useState ([]);


   const createTodoItem = (label) => {
      return {
         label,
         important: false,
         done: false,
         id: Date.now()
      }

      };

   const deleteItem = (id) => {
   
      const inx = todoData.findIndex ((el) => el.id === id);

      const newArrey = [
           ...todoData.slice(0, inx),
           ...todoData.slice(inx+1)
        ];

        setTodoData (newArrey);
     };

   const toggleProperty = (arr, id, propName) => {
      const inx = arr.findIndex ((el) => el.id === id);
      const oldItem = arr[inx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      return [ 
            ...arr.slice(0, inx),
            newItem,
            ...arr.slice(inx+1)
         ]      
   };

   const onToggleDone = (id) => {
      setTodoData(toggleProperty(todoData, id, 'done')) 
   };

   const onToggleImportant = (id) =>{
      setTodoData(toggleProperty(todoData, id, 'important'))
   };

   const addItem = (text) => {
      const newItem = createTodoItem(text);

      const newArr = [
            ...todoData,
            newItem
         ]
      setTodoData (newArr);
   };
   
   const doneCount = todoData.filter( (el) => el.done ).length;
   const todoCount = todoData.length - doneCount;

      return (
         <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount} />
         <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
         </div>
            <TodoList todos={todoData} 
            onToggleDone={onToggleDone}
            onToggleImportant={onToggleImportant}
            onDeleted={deleteItem} />

            <AddItemForm onAddedItem={addItem} />
         </div>
        );
};
    
export default App;