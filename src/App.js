import React, { useState } from 'react';
import './App.css';

const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  )
}

const Statistic = ({ text, value }) => <p>{text} {value}</p>

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

      <Statistic text="Hyvä" value={good} />
      <Statistic text="Neutraali" value={neutral} />
      <Statistic text="Huono" value={bad} />

      <p>Yhteensä {all}</p>
      <p>Keskiarvo {average}</p>
      <p>Positiivisia {positive} %</p>
    </aside>

  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <main>
      <Header title="Anna palautetta" />

      <Button
        handleClick={() => setGood(good + 1)}
        text="Hyvä"
      />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text="Neutraali"
      />
      <Button
        handleClick={() => setBad(bad + 1)}
        text="Huono"
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </main>
  )
}

export default App;
