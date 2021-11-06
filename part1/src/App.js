import React, { useState } from 'react'

const Title = (props) => <h1>{props.name}</h1>

const setValue = (func, newValue) =>() =>{
  func(newValue)
}

const Button = (props) => {
  return(
  <button onClick={setValue(props.func, props.value+1)}>
    {props.name}
  </button>
  )
}

const Statistic = (props) => {
  return(
    
    
      <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
      </tr>
    
    
    
  )
}

const Statistics = (props) => {
  const{good, neutral, bad} = props
  const all = good + neutral + bad
  if(all === 0){
    return(
      <p>No feedbacks for now!</p>
    )
  }return(
    <>
    <table>
    <tbody>
    <Statistic name="good" value={good}/>
    <Statistic name="neutral" value={neutral}/>
    <Statistic name="bad" value={bad}/>
    <Statistic name="all" value={all}/>
    <Statistic name="avg" value={((good - bad) / all).toFixed(2)}/>
    <Statistic name="positive" value={((good / all) * 100).toFixed(2) + "%"}/>
    </tbody>
    </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title name="give feedbacks"/>
      <Button name="good" func={setGood} value={good}/>
      <Button name="neutral" func={setNeutral} value={neutral}/>
      <Button name="bad" func={setBad} value={bad}/>
      <Title name="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App