import { Header } from "./Header";
import { Total } from "./Total";
export const Course = ({courses}) => {
    return (
        <>
            <Header title="Web Development Curriculum"/>
            {
                courses.map((course)=>(
                    <div  key={course.id}>
                        <h2>{course?.name}</h2>
                        {   
                             course.parts.map((part)=>(
                                <p key={part?.name}>{part?.name} {part?.exercises}</p>
                               
                            ))
                        }
                         <Total total = { course.parts.reduce((a, b) => a + b.exercises, 0) }/>
                    </div>
                  
                ))
            }
             
        </>
    )
}