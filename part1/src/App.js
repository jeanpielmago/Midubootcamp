import './App.css';
import React, { useState } from 'react'

function App() {
  
  const [ counter, setCounter ] = useState(0)

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
       <div>{counter}</div>
       <button onClick={() => setCounter(counter+1)}>
        clicks
       </button>
       <button onClick={() => setCounter(0)}>
        roll back
       </button>
      <Header title={course.name}/>
      <Content/>
      <Total/>
    </div>
  )
}

export default App;
