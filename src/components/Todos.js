import React, { Component } from 'react'
import Todoitems from './Todoitems';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this.props.todos.map((todo) =>(
            <Todoitems todo={todo}
                key={todo.id}
                toggleCompleted={this.props.toggleCompleted}
                buttonDelete={this.props.buttonDelete}
            />
        ));
}

}


Todos.propTpes = {
    todos: PropTypes.array.isRequired,
    toggleCompleted:PropTypes.func.isRequired
}


export default Todos