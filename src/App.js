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
    animals
  }

  render() {
    return (
      <>
        <Nav />
        <Header />
        <Wrapper>
          {this.state.animals.map(animal => (
            <ImageCard
              id={animal.id}
              key={animal.id}
              name={animal.name}
              image={animal.image}
            />
          ))}
        </Wrapper>
      </>
    )
  }
}

export default App;
