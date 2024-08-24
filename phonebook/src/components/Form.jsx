import React, { useState } from 'react';

export const Form = ({phonebook, setPhoneBook }) => {
  const [newEntry, setNewEntry] = useState({ name: '', number: '' });

  const handleFormValues = (event) => {
    const { name, value } = event.target;
    setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const submitForm = (event) => {
    event.preventDefault();

    // Check if the entry already exists in the phonebook
    const isDuplicate = phonebook.some(
        (entry) => entry.name === newEntry.name
    );

    if(isDuplicate){
        alert(`${newEntry.name} is already added to phonebook`);
        return;
    }

    setPhoneBook((prevPhoneBook) => [...prevPhoneBook, newEntry]);
    setNewEntry({ name: '', number: '' }); // Clear form after submission
  };

  return (
    <form onSubmit={submitForm}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={newEntry.name}
        onChange={handleFormValues}
      />

      <label>Phone Number</label>
      <input
        type="text"
        name="number"
        value={newEntry.number}
        onChange={handleFormValues}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
