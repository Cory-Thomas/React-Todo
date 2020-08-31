import React from 'react';
import './Todo.css';

class TodoItem extends React.Component {

    render() {
      const { task, toggle } = this.props;

      return (
        <section>
            <div
                className={ task.completed ? "complete" : null }
                onClick={ () => {
                    toggle( task.id );
                }}
            >
                <p>{ task.task }</p>
            </div>
            <p>{ task.completed ? "completed!" : null }</p>
        </section>
      );
    }
  }
  
  export default TodoItem;