export const Content = (props:any) => {
    console.log('Props', props);
    return (
        <p> {props.part?.name} {props.part?.exercises}</p>
    )
}