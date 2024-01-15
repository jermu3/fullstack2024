


const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  const Header = ({course}) => {
    return (
      <div>
          <h1>{course}</h1>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => ( <Part key={part.name} part={part.name} exercises={part.exercises} />))}
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
      {props.part} {props.exercises}
      </p>
    )
  }
  
  const Total = (props) => {
    const yht = props.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>
        <b>total of {yht} exercises</b>
      </div>
    )
  }

  export default Course