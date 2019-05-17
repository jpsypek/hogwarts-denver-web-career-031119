import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
const hogsWithShown = hogs.map((hog) => ({...hog, shown: true}))

class App extends Component {

  state = {
    hogList: hogsWithShown
  }

  sortingPigs = (variable) => {
    const newHogs = [...this.state.hogList]
    newHogs.sort((a,b) => (a[variable] > b[variable]) ? 1 : ((b[variable] > a[variable]) ? -1 : 0))
    this.setState({
      hogList: newHogs
    })
  }

  resetPigs = () => {
    this.setState({
      hogList: hogsWithShown
    })
  }
  handleSelect = (e) => {
    const weightKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    if (e.target.value === "reset") {
      this.resetPigs()
    } else if (e.target.value === "name") {
      this.sortingPigs("name")
    } else if (e.target.value === "weight") {
      this.sortingPigs(weightKey)
    }
  }

  handleIsGreased = (e) => {
    if (e.target.checked) {
      const newHogs = [...this.state.hogList].filter((hog) => hog.greased)
      // const newHogs = this.state.hogs.map((hog) => {
      //   (hog.shown = false))
      this.setState({
        hogList: newHogs
      })
    } else {
      this.setState({
        hogList: hogs
      })

    }
  }

  render() {
    const {hogList} = this.state
    return (
      <div className="App">
          <Nav />
          <div>
            <h4>Sort by:</h4>
            <select className="filterMenu" onChange={this.handleSelect}>
              <option value="reset"></option>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
          </div>
          <form>
            <label>
              Greased?:
              <input
                name="isGreased"
                type="checkbox"
                onChange={this.handleIsGreased} />
            </label>
          </form>
          <br />
          <br />
          <HogContainer hogs={hogList} />

      </div>
    )
  }
}

export default App;
