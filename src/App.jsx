import { Component } from 'react'
import SearchBox from './components/search-box/SearchBox'
import CardList from './components/card-list/CardList'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      filteredMonsters: []
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    this.setState({
      monsters: data,
      filteredMonsters: data,
    })
  }

  getFilteredMonsters(searchWord) {
    const { monsters } = this.state
    if (!searchWord) return monsters
    return monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchWord.toLowerCase())
    })
  }

  onSearchChange(event) {
    this.setState((state, props) => {
      return {
        filteredMonsters: this.getFilteredMonsters(event.target.value),
      }
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBox
          placeholder="Search monsters..."
          onChange={this.onSearchChange}
        />
        <CardList monsters={this.state.filteredMonsters} />
      </div>
    )
  }
}

export default App
