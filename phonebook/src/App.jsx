import { useState } from 'react'
import { Form } from './components/form';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Search } from './components/Search';


function App() {
  const [phoneBook, setPhoneBook] = useState([]);

  return (
    <>
      <Form phonebook = {phoneBook} setPhoneBook = {setPhoneBook}/>
      <Search phonebook = {phoneBook} setPhoneBook = {setPhoneBook}/>
      <Header title = "My PhoneBook"/>
      <Content phoneBook = {phoneBook}/>
    </>
  )
}

export default App
