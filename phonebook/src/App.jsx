import { useState } from 'react'
import { Form } from './components/form';
import { Header } from './components/Header';
import { Content } from './components/Content';


function App() {
  const [phoneBook, setPhoneBook] = useState([])

  return (
    <>
      <Form setPhoneBook = {setPhoneBook}/>
      <Header title = "My PhoneBook"/>
      <Content phoneBook = {phoneBook}/>
    </>
  )
}

export default App
