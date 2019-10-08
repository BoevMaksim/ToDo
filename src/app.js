import React, {Component} from 'react';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import AddItemForm from './components/add-item-form';

import './app.css';

export default class App extends Component {
  componentDidMount() {
    console.log('Testing branches')
  }

  maxID =100;

   state = {
      todoData: [
         this.createTodoItem('Drink coffee'),
         { label: 'Drink Coffee', important: false, id: 1},
         { label: 'Make Awesome App', important: false, id: 2},
         { label: 'Have a lunch', important: false, id: 3}
       ]
   };

   createTodoItem(label) {
      return {
         label,
         important: false,
         done: false,
         id: this.maxID++
      }

      };

   deleteItem = (id) => {
     this.setState (( {todoData} ) =>{
      const inx = todoData.findIndex ((el) => el.id === id);

      const newArrey = [
           ...todoData.slice(0, inx),
           ...todoData.slice(inx+1)
        ];
        
        return {
           todoData: newArrey
        };
      }
     )};

   toggleProperty (arr, id, propName) {
      const inx = arr.findIndex ((el) => el.id === id);
      const oldItem = arr[inx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      return [ 
            ...arr.slice(0, inx),
            newItem,
            ...arr.slice(inx+1)
         ]      
   };

   onToggleDone = (id) => {
        this.setState(( {todoData} ) => {
         return {
            todoData: this.toggleProperty(todoData, id, 'done')
         };
      })
   };

   onToggleImportant = (id) =>{
      this.setState(( {todoData} ) => {
       return {
          todoData: this.toggleProperty(todoData, id, 'important')
       };
    })
   };

   addItem = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({ todoData }) =>{
         const newArr = [
            ...todoData,
            newItem
         ];
         return{
            todoData: newArr
         }
      });
   };

   render () {

         const {todoData} = this.state;

         const doneCount = todoData
         .filter( (el) => el.done ).length;
         const todoCount = todoData.length - doneCount;

      return (
         <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount} />
         <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
         </div>
            <TodoList todos={todoData} 
            onToggleDone={this.onToggleDone}
            onToggleImportant={this.onToggleImportant}
            onDeleted={this.deleteItem} />

            <AddItemForm onAddedItem={this.addItem} />
         </div>
        );
   }
}
    
