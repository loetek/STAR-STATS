import React, { Component } from 'react';
import './App.css';
import List from './List'
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people:[],
    }
    this.getPeople = this.getPeople.bind(this);
  }

getStats(){
  return Axios.get("https://swapi.co/api/people")
  .then((response) => {
    console.log(response.data.results)
    this.setState({people:response.data.results})
  })
}

componentDidMount(){
  this.getStats();
}


  render() {
    const {people} = this.state;
    return (
      <div className="App">
      <List people = {people} />
      </div>
    );
  }
}

export default App;
