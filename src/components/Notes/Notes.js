import './Notes.css';
import Note from '../Note/Note';
import Input from '../Input/Input';
import { useEffect, useState } from 'react';

export default function Notes() {
  const url = 'https://ra-hw6-2-server.onrender.com/notes/';  //http://localhost:7070/notes/
  const [notes, setNotes] = useState([]);

  const get = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNotes(data.notes));
  }

  useEffect(() => {
    get();
  }, []);
  
  const handlerRefresh = () => {
    get();
  }

  return (
    <main className='widget'>
      <header className='header'>
        <div className='header_text'>Notes</div>
        <div 
        className='refresh'
        onClick={handlerRefresh}
        ></div>
      </header>
      <div className='notes'>
        {notes.map((note, index) => {
          console.log(notes);
          return (
            <Note
              key = {index}
              note = {note}
              setNotes = {setNotes}
              url = {url}
            />
          );}
        )}
      </div>
      <div className='input'>
        <Input
          setNotes = {setNotes}
          url = {url}
        />
      </div>
    </main>
  );
}
