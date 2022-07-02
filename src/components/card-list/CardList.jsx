// import { Component } from 'react'
import Card from './Card'
import './CardList.css'

// Class Component
// class CardList extends Component {
//   render() {
//     return (
//       <div className="monsters">
//         {this.props.monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id} />
//         })}
//       </div>
//     )
//   }
// }

// Functional Component
const CardList = ({ monsters }) => (
  <div className="monsters">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />
    })}
  </div>
)

export default CardList
