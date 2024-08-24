export const Content = ({phoneBook}) => {
    return (
        <>
            <ul>
                {
                    phoneBook.map((book) => (
                        <li>
                            <h3>{book.name}</h3>
                            <p>{book.number}</p>

                            <hr/>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}