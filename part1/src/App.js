import './App.css';

function App() {
  const course = 'Half Stack application development'
  const parts = [
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
  const Header = (props) => {
    return <h1>{props.title}</h1>
  }

  const Part = (props) =>{
    if(props.part === parts[0].name && props.exercises === parts[0].exercises){
      return(parts[0].name+": "+parts[0].exercises)
    }else if(props.part === parts[1].name && props.exercises === parts[1].exercises){
      return(parts[1].name+": "+parts[1].exercises)
    }else if(props.part === parts[2].name && props.exercises === parts[2].exercises){
      return(parts[2].name+": "+parts[2].exercises)
    }
  }

  const Content = () => {
    return(
      <div>
        <Part part={parts[0].name} exercises={parts[0].exercises}/>
        <br/>
        <Part part={parts[1].name} exercises={parts[1].exercises}/>
        <br/>
        <Part part={parts[2].name} exercises={parts[2].exercises}/>
      </div>
    )
  }

  const Total = () => {
    return ("Total exercises: "+ (parts[0].exercises + parts[1].exercises + parts[2].exercises))
  }

  return (
    <div>
      <Header title={course}/>
      <Content/>
      <Total/>
    </div>
  )
}

export default App;
