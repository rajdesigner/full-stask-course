import { useState } from 'react'
import './App.css'
import { HeaderLabel } from './Header';
import { Button } from './Button';
import { Statistics } from './Statistics';

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const feedBackButtonArr = ['good', 'neutral', 'bad']

  return (
    <>
     <HeaderLabel title={'Give feedback'}/>
     <Button buttonArr={feedBackButtonArr} goodCount={goodCount} badCount={badCount} neutralCount={neutralCount} setGoodCount = {setGoodCount} setBadCount = {setBadCount} setNeutralCount={setNeutralCount}/>
     <Statistics title='Statistics' goodCount={goodCount} neutralCount={neutralCount} badCount={badCount}  />
    </>
  )
}

export default App
