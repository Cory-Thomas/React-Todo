import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";

const tasksData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: tasksData,
    };
  }

  addTodo = task => {
    const addedTask = {
      task,
      id: Date.now(),
      completed: false,
    };

    this.setState({ 
      todo: [ ...this.state.todo, addedTask ]
    });
  };

  toggle = taskID => {
      this.setState({
        todo: this.state.todo.map( task => {
          return task.id === taskID 
            ? { ...task, completed: !task.completed } 
            : task;
        })
      });
  };

  clear = () => {
    this.setState({
      todo: this.state.todo.filter( todo => {
        return !todo.completed;
      })
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Todo App</h1>
        <TodoForm
          submit={ this.addTodo }
          clear={ this.clear }
        />
        <TodoList
          todos={ this.state.todo }
          toggle={ this.toggle }
        />
      </div>
    );
  }
}

export default App;
