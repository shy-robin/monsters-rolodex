import { Component } from 'react'
import Card from './Card'
import './CardList.css'

class CardList extends Component {
  render() {
    return (
      <div className="monsters">
        {this.props.monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />
        })}
      </div>
    )
  }
}

export default CardList
