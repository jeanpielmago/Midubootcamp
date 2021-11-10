import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =(props) => {
  return(<button onClick={props.func}>{props.name}</button>)
}

const Ttitle = (props) =>{
  return(<h1>{props.name}</h1>)
}

const Anecdote = (props) =>{
  return(<p>{props.anecdote}</p>)
}

const Vote = (props) =>{
  return(<p>anecdote has {props.vote} votes</p>)
}

const MostVote =(props)=>{
  const countVotes = Math.max(...props.vote)
  const indexOfMostVote = props.vote.indexOf(countVotes)
  const ganador = props.anecdote[indexOfMostVote]
  
  if(countVotes===0){
    return(
      <p>No votes yet</p>
    )
  }
  return(
    
    <div>
     
      <p>{ganador}</p>
    <p>has {countVotes} votes</p>
    </div>
    
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const handleSelected=()=>{
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  
  const handleVote =()=>{
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    
  }
  



  return (
    <div>
      <Ttitle name="Anecdote of the day"/>
      <Anecdote anecdote={props.anecdotes[selected]}/>
      <Vote vote={votes[selected]}/>
      <Button name="vote" func={handleVote}/>
      <Button name="next anecdote" func={handleSelected}/>
      <br/>
      <Ttitle name="Anecote with most votes"/>
      <MostVote vote={votes} anecdote={anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)