import React, {Component} from 'react';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './app.css';

export default class App extends Component {

   state = {
      todoData: [
         { label: 'Drink Coffee', important: false, id: 1},
         { label: 'Make Awesome App', important: false, id: 2},
         { label: 'Have a lunch', important: false, id: 3}
       ]
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

   render () {
      return (
         <div className="todo-app">
            <AppHeader toDo={1} done={3} />
         <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
         </div>
            <TodoList todos={this.state.todoData} 
            onDeleted={this.deleteItem} />
         </div>
        );
   }
}
    
