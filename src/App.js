import "./App.css";
import { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/Search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") //fetching from the back end then returns a promise
      .then((response) => response.json()) //response in JSON file(Promise)
      .then((users) => this.setState({ monsters: users })); //The names gotten from the array are embeded to the monsters directly
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    //Destructuring- pull properties from an object and set to constanst

    const { monsters, searchField } = this.state;

    /*Basically its the shortcut of 
    const monsters = this.state.monsters
    const searchField = this.state.searchField
    */
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters}>
          {" "}
          /*changed from monsters={this.state.monsters} to monsters=
          {filteredMonsters}*/
        </CardList>
      </div>
    );
  }
}

export default App;
