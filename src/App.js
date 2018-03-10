import React, { Component } from 'react';
import './App.css';
// import TodoForm from './to-do-form'
// import TodoList from './to-do-list'

class TodoApp extends Component {

  constructor(props){
    // Pass props to parent class
    super(props);

    // Set initial state

  }

  // Add todo handler
  addTodo(val) {
    console.log('add todo')

    // create todo with text and id
    // push into data
    // setState
  }

  // Handle remove
  // Filter all todos except the one to be removed
  // Update state with filter


  render(){
    // const {data} = this.state
    return (
      <div>
        <h1 className="App-header">TO DO!</h1>
        {/*add TodoForm with addTodo*/}
        <h2 className="form"> What I need to get done: </h2>
        {/*add TodoList first */}
      </div>
    );
  }
}

export default TodoApp
