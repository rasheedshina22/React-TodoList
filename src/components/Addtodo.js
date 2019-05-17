import React, { Component } from 'react'

class Addtodo extends Component {
    
    state = {
        title:''
    }
//we need to be able to put the value of the input somewhere 
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title);
        this.setState({
            title:''
        })
        
    }



    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                <div className="form-group">
                <input type="text"
                    placeholder='Add Todo..'
                        className='form-control'
                        onChange={this.handleChange}
                        name='title'
                        value={this.state.title}

                />
                
                </div>
           </form>
        )
      
    }
}


  export default Addtodo