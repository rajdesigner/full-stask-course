export const Button = ({buttonArr, setGoodCount, setBadCount, setNeutralCount, goodCount, badCount, neutralCount}) => {
   
    const handleClick = (value) => {
        if(value == 'good'){
            setGoodCount(goodCount + 1);
        } else if(value == 'bad') {
            setBadCount(badCount + 1);
        } else {
            setNeutralCount(neutralCount + 1)
        }
    }
    return (
        <>
         {
            buttonArr.map((button) => (
                <button name={button} value={button} key={button} onClick={() => handleClick(button)}>{button}</button>
            ))
         }
        </>
    )
}