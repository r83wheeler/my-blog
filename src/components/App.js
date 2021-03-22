import React, { Component } from 'react';
import Header from './Header'


class App extends Component {
  constructor() {
    super();
    this.RussellsName = "Russ";
    this.age = 38;
    

    this.state = {
      clicked: 0
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (e){
    this.setState({clicked: this.state.clicked + 1 })
  }

  render() {
    return (
      <div className="App">
        <Header
          text="Hello"
          name={this.RussellsName}
          age={this.age}
          Electrician
        />
      App layer Component
      <div>
        clicked: {this.state.clicked}
      </div>
      <button
       type="button"
        className="btn btn-primary" 
        onClick={this.clickHandler}
        >click me!
        </button>
      </div>
    )
  }
}

export default App;
