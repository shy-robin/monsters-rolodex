// import { Component } from 'react'
import './Card.css'

// Class Component
// class Card extends Component {
//   render() {
//     const { id, name, website, phone } = this.props.monster
//     return (
//       <div key={id} className="card">
//         <img
//           src={`https://robohash.org/${id}?set=set1&size=180x180`}
//           alt={`monster ${name}}`}
//         />
//         <div className="description">
//           <div className="name">
//             <span className="label">name: </span>
//             <span>{name}</span>
//           </div>
//           <div className="website">
//             <span className="label">website: </span>
//             <span>{website}</span>
//           </div>
//           <div className="phone">
//             <span className='phone'>phone: </span>
//             <span>{phone}</span>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// Functional Component
const Card = ({ monster: { id, name, website, phone } }) => (
  <div key={id} className="card">
    <img
      src={`https://robohash.org/${id}?set=set1&size=180x180`}
      alt={`monster ${name}}`}
    />
    <div className="description">
      <div className="name">
        <span className="label">name: </span>
        <span>{name}</span>
      </div>
      <div className="website">
        <span className="label">website: </span>
        <span>{website}</span>
      </div>
      <div className="phone">
        <span className="phone">phone: </span>
        <span>{phone}</span>
      </div>
    </div>
  </div>
)

export default Card
