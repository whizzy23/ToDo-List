import React , {Component} from "react";

class AddTodo extends Component {
    state={
      id:null ,
      content:null
    }

    handleChange = (e) => {
      this.setState(
        {
            [e.target.id] : e.target.value
        }
      )
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTask(this.state);
      this.setState(
        {content:''}
      )
    }

    render(){
       return (
        <div className="add-todo">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="content"></label>
                <input type="text" id="content" onChange={this.handleChange} value={this.state.content} />
                <button>Add</button>
            </form>
        </div>
       )
    }
}

export default AddTodo



