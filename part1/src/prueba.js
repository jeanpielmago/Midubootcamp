import './App.css';
import React, { useState } from 'react'

function App() {

  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  
  const [ counter, setCounter ] = useState(0)

  const incrementOne = () => setCounter(counter+1)

  const setZero = () => setCounter(0)

  const decreaseOne = () => setCounter(counter - 1)

  const Display = ({counter}) => <div>{counter}</div>
  
  const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
  )


  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }





      
  
  

  /*setTimeout(
    () => setCounter(counter + 1),
    1000
  )*/
  

  



  console.log('rendering...', counter)


  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const Header = (props) => {
    return <h1>{props.title}</h1>
  }

  const Part = (props) =>{
    if(props.part === course.parts[0].name && props.exercises === course.parts[0].exercises){
      return(course.parts[0].name+": "+course.parts[0].exercises)
    }else if(props.part === course.parts[1].name && props.exercises === course.parts[1].exercises){
      return(course.parts[1].name+": "+course.parts[1].exercises)
    }else if(props.part === course.parts[2].name && props.exercises === course.parts[2].exercises){
      return(course.parts[2].name+": "+course.parts[2].exercises)
    }
  }

  const Content = () => {
    return(
      <div>
        <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
        <br/>
        <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
        <br/>
        <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
      </div>
    )
  }

  const Total = () => {
    return ("Total exercises: "+ (course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises))
  }

  return (
   
    <div>
        {left}
        <Button onClick={handleLeftClick} text="left"/>
        <Button onClick={handleRightClick} text="right"/>
        {right}
        <History allClicks={allClicks}/>
       <Display counter={counter}/>
       <Button onClick={incrementOne} text="plus"/>
       <Button onClick={setZero} text="zero"/>
       <Button onClick={decreaseOne} text="minus"/>
      <Header title={course.name}/>
      <Content/>
      <Total/>
    </div>
  )
}

export default App;
