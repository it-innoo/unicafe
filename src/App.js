import React, { useState } from 'react';
import './App.css';

const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral
  const average = (good + bad * (-1)) / all
  const positive = 100 * (good / all)

  if (all === 0) {
    return (
      <aside>
        <Header title="Tilastot" />
        Ei palauteitta
      </aside>
    )
  }

  return (
    <aside>
      <Header title="Tilastot" />

      <p>Hyvä {good}</p>
      <p>Neutraali {neutral}</p>
      <p>Huono {bad}</p>

      <p>Yhteensä {all}</p>
      <p>Keskiarvo {average}</p>
      <p>Positiivisia {positive} %</p>
    </aside>

  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <main>
      <Header title="Anna palautetta" />
      <button onClick={() => setGood(good + 1)}>
        Hyvä
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutraali
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Huono
      </button>


      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </main>
  )
}

export default App;
