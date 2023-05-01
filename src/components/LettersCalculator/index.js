// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onTextChange = event => {
    if (event.target.value === '') {
      this.setState({count: 0})
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="card">
          <h1 className="title">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label htmlFor="userInput" className="user-input-label">
              Enter the phrase
            </label>
            <input
              type="text"
              className="user-input"
              placeholder="Enter the phrase"
              id="userInput"
              onKeyUp={this.onTextChange}
            />
          </div>
          <p className="count">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
