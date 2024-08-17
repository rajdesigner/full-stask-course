export const Content = (props:any) => {
    return (
        <>
            {
                props.part.map((part:any)=>(
                    <p>{part?.name} {part?.exercises}</p>
                ))
            }
        </>
       
    )
}