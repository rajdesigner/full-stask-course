import { useState, useEffect } from 'react'
import './App.css'
import { HeaderLabel } from './Header';
import { Button } from './Button';
import { Statistics } from './Statistics';
import { Anecdotes } from './Anecdotes';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  let votesObj = {};
  useEffect(()=>{
    for(let anecdote of anecdotes){
        votesObj[anecdote] = votesObj[anecdote]? votesObj[anecdote]:0;
    }

  }, [])
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const feedBackButtonArr = ['good', 'neutral', 'bad']

  return (
    <>
     <HeaderLabel title={'Give feedback'}/>
     <Button buttonArr={feedBackButtonArr} goodCount={goodCount} badCount={badCount} neutralCount={neutralCount} setGoodCount = {setGoodCount} setBadCount = {setBadCount} setNeutralCount={setNeutralCount}/>
     <Statistics title='Statistics' goodCount={goodCount} neutralCount={neutralCount} badCount={badCount}  />
     <Anecdotes anecdotes = {anecdotes} votesObj = {votesObj}/>
    </>
  )
}

export default App
