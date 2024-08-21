import { useState } from "react";

export const Anecdotes = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdotes.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {}));

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selected]: prevVotes[selected] + 1,
    }));
  };

  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const mostVotedIndex = Object.keys(votes).find((key) => votes[key] === maxVotes);
    return { anecdote: anecdotes[mostVotedIndex], votes: maxVotes };
  };

  const { anecdote: mostVotedAnecdote, votes: mostVotes } = getMostVotedAnecdote();

  return (
    <div>
      <p>{anecdotes[selected]}  has <strong>{votes[selected]}</strong> votes</p>
      <button onClick={handleVote}>
       Vote
      </button>
      <button onClick={handleClick}>Next Anecdote</button>

      <h2>Ancedote with most votes</h2>
      {mostVotes > 0 ? (
        <div>
          <p>{mostVotedAnecdote}</p>
        </div>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};
