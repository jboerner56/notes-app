import React from 'react';
import NotesList from './NotesList'
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';
export default class NotesApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes: []  // this will hold an array of objects
        }
    }
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.list}>
                    <NotesList/>
                </div>
                <div>
                    <NotesDetail className={styles.detail}/>
                </div>
            </div>
        )
    }
}