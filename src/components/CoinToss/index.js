import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(preState => ({
        headsCount: preState.headsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
      this.setState(preState => ({
        count: preState.count + 1,
      }))
    } else {
      this.setState(preState => ({
        tailsCount: preState.tailsCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
      this.setState(preState => ({
        count: preState.count + 1,
      }))
    }
  }

  render() {
    const {imageUrl, count, headsCount, tailsCount} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="img" />
          <button className="btn" type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="result-card">
            <p className="result-para">Total: {count}</p>
            <p className="result-para">Heads: {headsCount}</p>
            <p className="result-para">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
