import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import ImageCard from './components/ImageCard'
import animals from './animals.json'


class App extends Component {
  state = {
    animals: animals,
    score: 0,
    topScore: 0,
    clickedIds: [],
    message: 'Click an image to begin!'
  }

  shuffleArr = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  clickHandler = id => {
    if (this.state.clickedIds.includes(id)) {
      this.setState({
        score: 0,
        clickedIds: [],
        message: 'You guessed incorrectly!'
      })
    } else {
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.topScore <= this.state.score ? this.state.score + 1 : this.state.topScore,
        clickedIds: [...this.state.clickedIds, id],
        message: 'You guessed correctly!'
      })
    }
    console.log(this.state.clickedIds)
    this.setState({
      animals: this.shuffleArr(this.state.animals)
    })
  }

  render() {
    return (
      <>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Header />
        <Wrapper>
          {this.state.animals.map(animal => (
            <ImageCard
              id={animal.id}
              key={animal.id}
              name={animal.name}
              image={animal.image}
              click={this.clickHandler}
            />
          ))}
        </Wrapper>
      </>
    )
  }
}

export default App;
