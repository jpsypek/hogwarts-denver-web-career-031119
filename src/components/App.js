import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
const hogsWithShown = [...hogs].map((hog) => ({...hog, shown: true, notHidden: true}))

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
      const newHogs = [...this.state.hogList].map((hog) => {
        if (hog.greased) {
          hog.shown = false
        }
        return hog
      })
      this.setState({
        hogList: newHogs
      })
    } else {
      const newHogs = [...this.state.hogList].map((hog) => {
          hog.shown = true
          return hog
      })
      this.setState({
        hogList: newHogs
      })
    }
  }

  toggleHide = (name) => {
    const newHogs = [...this.state.hogList].map((hog) => {
      if (hog.name === name) {
        hog.notHidden = false
      }
      return hog
    })
    this.setState({
      hogList: newHogs
    })
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
          <HogContainer hogs={hogList} toggleHide={this.toggleHide}/>

      </div>
    )
  }
}

export default App;
