// import { Component } from 'react'
import './SearchBox.css'

// Class  Component
// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className='search-input'
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChange}
//       />
//     )
//   }
// }

// Functional Component
const SearchBox = ({ placeholder, onChange }) => (
  <input
    className="search-input"
    type="search"
    placeholder={placeholder}
    onChange={onChange}
  />
)

export default SearchBox
