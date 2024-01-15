import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}
const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    );
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={'good'} value={good} />
          <StatisticLine text={'neutral'} value={neutral} />
          <StatisticLine text={'bad'} value={bad} />
          <StatisticLine text={'all'} value={total} />
          <StatisticLine text={'average'} value={(good - bad) / total} />
          <StatisticLine text={'positive'} value={(good / total) * 100 + '%'} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};


const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }
  

  return (
    <div>
      <div>
        <Header course={'give feedback'}/>
        
        <Button handleClick={handleGood} text='good' />
        <Button handleClick={handleNeutral} text='neutral' />
        <Button handleClick={handleBad} text='bad' />

        <Header course={'statistics'}/>

        <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
      </div>
    </div>
  )
}

export default App