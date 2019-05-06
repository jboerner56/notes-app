import React from 'react';
import styles from './NotesList.module.css';
// only export one component per file.
// can have multiple helper component that go into the parent component being exported
function NotesListItem ({id, text, handleClick}) {
    return(
        <li>
            <a 
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    console.log("clicked");
                    handleClick(id);
                }}
            >
                {text}
            </a>
        </li>
    );

}
export default function NotesList ({notes, className, handleSelection}) {
    // 
    const items = notes.map(note => <NotesListItem id={note.id} text={note.title} handleClick={handleSelection}/>);
    return(
        <ul className={styles.notesList}>
            {items}
        </ul>
    )
}