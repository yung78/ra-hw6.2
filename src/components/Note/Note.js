import './Note.css';

export default function Note({note, setNotes, url}) {
  const handlerClick = (e) => {
    fetch(url + e.target.id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => setNotes(data.notes));
  }
  
  return (
    <div 
      className = 'note'
    >
      {note.content}
      <div 
        className='delete'
        id = {note.id}
        onClick={handlerClick}
      ></div>
    </div>
  );
}
