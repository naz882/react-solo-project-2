import React from 'react'
//import './App.css'

import Header from './components/header';
import Card from './components/card';
import cards from './assets/data';


function App() {

  const cardData = cards.map((card) => {
    return (
      <Card item={card} />
    )
  })

  return (
    <div className="App">
      <Header />
      {cardData}
    </div>
  )
}

export default App
