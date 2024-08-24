import { useState } from "react";

export const Search = ({phonebook, setPhoneBook}) => {

    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (event) => {
        setSearchValue(event.target.value);
        const filteredPhoneBook = phonebook.filter((book)=>
            book.name.includes(event.target.value)
        )
        
        setPhoneBook(filteredPhoneBook);


        
    }
    
    return (
        <>
            <input type="search" value={searchValue} onChange={handleSearch}/>
        </>
    )
}