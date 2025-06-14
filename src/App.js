import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://script.google.com/macros/s/AKfycby6KH-WoZGk40DjurSgUncMVDRk1csuah9GUrHH9e1yhTfF7122AbD0bLPf9_VGsS36/exec',
        { name },
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert('✅ Name saved to Google Sheet!');
      setName('');
    } catch (err) {
      console.error(err);
      alert('❌ Failed to save name');
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h2>Save Name to Google Sheet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
          style={{ padding: 8, marginRight: 10 }}
        />
        <button type="submit" style={{ padding: 8 }}>Save</button>
      </form>
    </div>
  );
}

export default App;
