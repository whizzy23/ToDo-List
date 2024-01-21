import React , { Component } from 'react';
import Todos from "./Todos.js"
import AddTodo from './addTask';
import "./todo.css"

class App extends Component {
  state = {
    todos : []
  }

  addTask = (todo) => {
    todo.id = Math.random();
    let upTodos = [...this.state.todos , todo]
    this.setState({
      todos : upTodos
    })
  }

  deleteTask = (id) => {
    let upTodos = this.state.todos.filter( todo => {
      return id !== todo.id
    })
    
    this.setState ( {
      todos : upTodos       
    })
  }

  render(){
    return(
      <div className='App'>
        <h1> ToDo List </h1>
        <Todos todos={this.state.todos} deleteTask={this.deleteTask} />
        <AddTodo addTask = { this.addTask } />
      </div>
    )
  }  
}

export default App;
