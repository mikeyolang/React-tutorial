
import './App.css';
import { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""

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
        <input type="search" placeholder='Search monster'
          onChange={e => {this.setState({searchField: e.target.value })
           console.log(this.state)
        }
        }
          
          />
            <CardList monsters={this.state.monsters}>
            </CardList>

      </div>


    );

  }
}

export default App;
