import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";
import { Accordion } from "./Accordion";

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

function App() {
  return (
    <div>
      <Header course = {course}/>
      <Content part = {parts}/>
      <Total total = { parts.reduce((a, b) => a + b.exercises, 0) }/>
      <Accordion></Accordion>
    </div>
  )
}

export default App
