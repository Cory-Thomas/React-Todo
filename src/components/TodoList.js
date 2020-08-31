// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

class TodoList extends React.Component {
    render() {
      const { todos, toggle } = this.props;

      return (
        <div>
          {todos.map( task => {
            return <Todo 
                key={ task.id } 
                task={ task } 
                toggle={ toggle }
                className='task'
            />;
          })}
        </div>
      );
    }
  }
  
  export default TodoList;