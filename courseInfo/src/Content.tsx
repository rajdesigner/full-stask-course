import { useState } from "react"

export const Content = (props:any) => {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    })

    const handleleftClick = () => {
        const newClicks = {
            ...clicks,
            left: clicks.left + 1,
            
        }

        setClicks(newClicks);
    }


    const handleRightClick = () => {
        const newClicks = {
            ...clicks,
            right: clicks.right + 1
        }

        setClicks(newClicks);
    }

    return (
        <>
            <button onClick={handleleftClick}>Left Click</button>
            <button onClick={handleRightClick}>Right Click</button>
            left: {clicks.left} right: {clicks.right}
            {
                
                props.part.map((part:any)=>(
                    <p key={part?.name}>{part?.name} {part?.exercises}</p>
                ))
            }
        </>
       
    )
}