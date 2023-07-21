import {Component} from 'react'

import './index.css'

class FruitCounter extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onIecreament1 = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1>
          Bob ate {count} mangoes {count} bananas
        </h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
          className="image"
          alt="mango"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
          className="image"
          alt="banana"
        />
        <div className="imagecontainer">
          <button className="button1" onClick={this.onIncreament}>
            Eat Mango
          </button>
          <button className="button2" onClick={this.onIecreament1}>
            Eat Banana
          </button>
        </div>
      </div>
    )
  }
}
export default FruitCounter
