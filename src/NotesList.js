import React from 'react';
import styles from './NotesList.module.css';
// only export one component per file.
// can have multiple helper component that go into the parent component being exported
function NotesListItem ({text}) {
    return(
        <li>{text}</li>
    )
}
export default function NotesList ({notes, className}) {
    // 
    const items = notes.map(note => <NotesListItem text={note.title}/>);
    return(
            <ul className={styles.NotesList}>
            {items}
            </ul>
    )
}