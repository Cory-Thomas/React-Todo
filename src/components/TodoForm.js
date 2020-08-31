import React from 'react';

class TodoForm extends React.Component {
    constructor( props ) {
      super( props );
      this.state = { task: "" };
    }
  
    handleSubmit = event => {
      event.preventDefault();
      
      this.props.submit( this.state.task, () => {
        this.setState({ task: "" });
      });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
  
    clear = event => {
      event.preventDefault();
      this.props.clear();
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="task">
                Create a Task: 
            </label>
            <input
                id="task"
                name="task"
                value={this.state.task}
                onChange={this.handleChange}
                placeholder="Type a Task"
            />
            <div>
              <button type="submit">
                Add Task
              </button>
              <button onClick={this.clear}>
                  Clear
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default TodoForm;