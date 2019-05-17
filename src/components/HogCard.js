import React, {Component} from 'react'
import HogDetails from './HogDetails'
import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy_note from '../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg'
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbowdash from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffle_shuffle from '../hog-imgs/truffleshuffle.jpg'
const snake = require('to-snake-case')
const photos = {
  mudblood: mudblood,
  augustus_gloop: augustus_gloop,
  bay_of_pigs: bay_of_pigs,
  cherub: cherub,
  galaxy_note: galaxy_note,
  leggo_my_eggo: leggo_my_eggo,
  piggy_smalls: piggy_smalls,
  porkchop: porkchop,
  rainbowdash: rainbowdash,
  sobriety: sobriety,
  the_prosciutto_concern: the_prosciutto_concern,
  trouble: trouble,
  truffle_shuffle: truffle_shuffle,
}


class HogCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      specialty: this.props.specialty,
      greased: this.props.greased,
      image: photos[snake(this.props.name)],
      weight: this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'],
      medal: this.props['highest medal achieved'],
      shown: this.props.shown,
      notHidden: this.props.notHidden,
      showDetails: false
    }
  }

  toggleShowDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  hideCard = () => {
    this.setState({
      shown: false
    })
  }
  render () {

    return (
      <div>
      {this.state.shown && this.state.notHidden ?
        <div className="ui four wide column">
          <h2>{this.state.name}</h2>
          <img src={this.state.image} alt={this.state.name}/>
          <br />
          <button onClick={this.toggleShowDetails}>Show More</button>
          <div className="details">
            {this.state.showDetails ? <HogDetails {...this.props}/> : null}
          </div>
          <button onClick={() => this.props.toggleHide(this.state.name)}>Hide</button>
        </div>
      : null }
    </div>
    )
  }

}
export default HogCard
