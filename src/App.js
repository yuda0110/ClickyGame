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
    correct: 'default',
    message: 'Click an image to begin!'
  }

  shuffleArr = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  clickImageHandler = id => {
    return () => {
      if (this.state.clickedIds.includes(id)) {
        this.setState({
          score: 0,
          clickedIds: [],
          correct: false,
          message: 'You guessed incorrectly!'
        })
        setTimeout(() => {
          this.setState({
            correct: 'default'
          })
        }, 1200)
      } else {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore <= this.state.score ? this.state.score + 1 : this.state.topScore,
          clickedIds: [...this.state.clickedIds, id],
          correct: true,
          message: 'You guessed correctly!'
        })
        setTimeout(() => {
          this.setState({
            correct: 'default'
          })
        }, 1200)
      }
      console.log(this.state.clickedIds)
      this.setState({
        animals: this.shuffleArr(this.state.animals)
      })
    }
  }

  render() {
    return (
      <>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          correct={this.state.correct}
          message={this.state.message}
        />
        <Header />
        <Wrapper correct={this.state.correct}>
          {this.state.animals.map(animal => (
            <ImageCard
              id={animal.id}
              key={animal.id}
              name={animal.name}
              image={animal.image}
              click={this.clickImageHandler(animal.id)}
            />
          ))}
        </Wrapper>
      </>
    )
  }
}

export default App;
