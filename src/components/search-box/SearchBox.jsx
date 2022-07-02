import { Component } from 'react'
import './SearchBox.css'

class SearchBox extends Component {
  render() {
    return (
      <input
        className='search-input'
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    )
  }
}

export default SearchBox
