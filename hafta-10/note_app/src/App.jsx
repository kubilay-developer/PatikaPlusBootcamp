import { useState } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [filter, setFilter] = useState('');

  const addNote = () => {
    if (text.trim() !== '') {
      setNotes([...notes, { text, color }]);
      setText('');
    }
  };

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note here..."
      />
      <div>
        <label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          Select Color
        </label>
      </div>
      <button onClick={addNote}>ADD</button>
      <div>
        {filteredNotes.map((note, index) => (
          <div key={index} style={{ backgroundColor: note.color, padding: '10px', margin: '10px 0' }}>
            {note.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
