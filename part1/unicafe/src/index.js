import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title=(props)=>{
  return(<h1>{props.name}</h1>)
}

const Button=(props)=>{
  return(<button onClick={props.func}>{props.name}</button>)
}

const Statistics=(props)=>{
  const {good, neutral, bad} = props
  const all = good + bad + neutral
  if(all===0){
    return(<p>No feedbacks for now!</p>)
  }
  return(
    <table>
      <tbody>
        <Statistic name="good" value={good}/>
        <Statistic name="neutral" value={neutral}/>
        <Statistic name="bad" value={bad}/>
        <Statistic name="all" value={all}/>
        <Statistic name="avg" value={((good-bad)/all).toFixed(2)}/>
        <Statistic name="positive" value={((good*100)/all).toFixed(2)}/>
      </tbody>
    </table>
  )
}

const Statistic=(props)=>{
  return(
    <tr>
      <td>
        {props.name} {props.value}
      </td>
    </tr>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGood=()=>{
    setGood(good+1)
  }
  const handleNeutral=()=>{
    setNeutral(neutral+1)
  }

  const handleBad=()=>{
    setBad(bad+1)
  }

  return (
    <div>
      {console.log(good, neutral, bad)}
      <Title name="give feedbacks"/>
      <Button name="good" func={handleGood}/> 
      <Button name="neutral" func={handleNeutral}/> 
      <Button name="bad" func={handleBad}/> 
      <Title name="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)