import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  state = {
    calender: null
  }
  componentDidMount(){
    const { store } = this.props;
    store.subscribe(() => {
      this.setState(() => {
        calender: store.getState();
      })
    });
  }
  render() {
    return (
      <div className="App">
       <input
        tyoe = 'text'
        ref = {(input) => this.input = input}
        placeholder = 'Monday breakfast'
        />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Monday's Breakfast: {this.state.calender && this.state.calender.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
