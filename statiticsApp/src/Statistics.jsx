export const Statistics = ({title, goodCount, neutralCount, badCount}) => {
    return (
        <>
            <h3>{title}</h3>
            {
                goodCount === 0 && neutralCount === 0 && badCount === 0 ?
                <h4>No FeedBack Given</h4> :
                <>
                    <h5>Good Count: {goodCount}</h5>
                    <h5>Neutral Count: {neutralCount}</h5>
                    <h5>Bad Count: {badCount}</h5>
                    <h5>all: {goodCount + neutralCount + badCount}</h5>
                    <h5>average: {Math.floor((goodCount + neutralCount + badCount) / 3)}</h5>
                    <h5>Positive: {(goodCount/(goodCount + neutralCount + badCount))*100}%</h5>
                </>
            }
        </>
    )
}