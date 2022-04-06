
import './App.css';
import { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []

    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')  //fetching from the back end then returns a promise
      .then(response => response.json()) //response in JSON file(Promise)
      .then(users => this.setState({ monsters: users })) //The names gotten from the array are embeded to the monsters directly
  }

  render() {
    return (
      <div className='App'>
            <CardList name="Mike"></CardList> 
        {
          this.state.monsters.map(monsters => (<h1 key={monsters.id}>{monsters.name}</h1>)) //Return every elemnt inn the array,
        }
      </div>
    );
  }
}

export default App;
