// import { Component } from 'react'
import { useState, useEffect } from 'react'
import SearchBox from './components/search-box/SearchBox'
import CardList from './components/card-list/CardList'
import './App.css'

// Class Component
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       monsters: [],
//       filteredMonsters: [],
//     }
//     this.onSearchChange = this.onSearchChange.bind(this)
//   }

//   async componentDidMount() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     this.setState({
//       monsters: data,
//       filteredMonsters: data,
//     })
//   }

//   getFilteredMonsters(searchWord) {
//     const { monsters } = this.state
//     if (!searchWord) return monsters
//     return monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchWord.toLowerCase())
//     })
//   }

//   onSearchChange(event) {
//     this.setState((state, props) => {
//       return {
//         filteredMonsters: this.getFilteredMonsters(event.target.value),
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <SearchBox
//           placeholder="Search monsters..."
//           onChange={this.onSearchChange}
//         />
//         <CardList monsters={this.state.filteredMonsters} />
//       </div>
//     )
//   }
// }

// Functional Component
const App = () => {
  // 当 useState 的值改变后，函数就会重新执行一次，页面 render。
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([])
  const [searchWord, setSearchWord] = useState('')

  // 只有当 useEffect 第二个参数中的元素改变后，才会执行回调函数，若为空数组，则表示仅当组件初次渲染时执行一次。
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setMonsters(data)
      setFilteredMonsters(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const newMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchWord.toLowerCase()))
    setFilteredMonsters(newMonsters)
  }, [monsters, searchWord])

  const onSearchChange = (event) => {
    setSearchWord(event.target.value)
  }

  return (
    <div className="App">
      <SearchBox placeholder="Search monsters..." onChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
