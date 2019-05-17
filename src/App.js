import React, { Component } from 'react'
// import uuid from 'uuid';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo'
import Header from './components/layouts/Header';
import About from './components/pages/About';


class App extends Component {


  //FETCHING THE DATA FROM THE COMPONENT STATE 

  // state = {
  //   todos: [
  //     { id: uuid.v4(), 
  //       title: 'learn React',
  //       completed:false
  //     },

  //     { id: uuid.v4(), 
  //       title: 'learn the Mern Stack',
  //       completed:false 
  //     },

  //     { id: uuid.v4(), 
  //       title: 'learn Angular',
  //       completed:false
  //     },

  //     { id: uuid.v4(), 
  //       title: 'learn Vue',
  //       completed:false 
  //     },
  //   ]
    
  // }



    state = {
      todos:[]
    }

  
//FETCHING THE DATA FROM A THIRD PARTY API 
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({ todos: res.data }));

  }



  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  buttonDelete = (id) => {
    //we only return the todos whose id is not equal to the todo being clicked;
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => 
        this.setState({
          todos: this.state.todos.filter(function (todo) {
            return todo.id !== id;
          })

        })
      )
   
  }

  addTodo = (title) => {
    //this is the new object we want to add 
    // const new_todo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed:false
    // }

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed:false
    })
      .then(res => this.setState({

        todos: [...this.state.todos, res.data]
      }) )
  }

//to load two components on a single path we use render={props()}
  render() {
      return (
        <Router>
        <div className="App">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
              <Addtodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos}
              toggleCompleted={this.toggleCompleted}
              buttonDelete={this.buttonDelete}
              />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>
          </div>
        </Router>

    )
  }
}


export default App