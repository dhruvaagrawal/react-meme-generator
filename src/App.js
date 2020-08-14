import React, { Component } from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import MemeReel from './MemeReel'
import './style.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      showMemeReel: false,
      showMemeGenerator: false
    }
  }

  render() {
    if (this.state.showMemeGenerator) { 
      return (
        <div>
          <Header />
          <MemeGenerator />
      </div>
      )
    } else if (this.state.showMemeReel) {
      return (
        <div>
          <Header />
          <MemeReel />
        </div>
      )
    }
    return (
      <div>
        <Header />
        <div className="div-option">
            <button onClick={() => this.setState({ showMemeReel: !this.state.showMemeReel })}>Select your background</button>
            <button onClick={() => this.setState({ showMemeGenerator: !this.state.showMemeGenerator })}>Generate a random meme</button>
        </div>
      </div>
    )
  }
}

export default App