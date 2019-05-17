import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todoitems extends Component {

  todoStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  toggleTodo(id) {
    this.props.toggleCompleted(id);
  }

  deleteButton(id){
    this.props.buttonDelete(id);
  }

  render() {
    const { title, id} = this.props.todo
    return (
      <div style={this.todoStyle()}>
        <p>
          <input type="checkbox" onChange={this.toggleTodo.bind(this, id)}/> {' '}
          {title}
          <button style={btnStyle} onClick={this.deleteButton.bind(this,id)}>
            &times;
          </button>
        </p>
      </div>
    )
  }
}



Todoitems.propTpes = {
  todo:PropTypes.object.isRequird,
  toggleCompleted: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float:'right'
}
export default Todoitems