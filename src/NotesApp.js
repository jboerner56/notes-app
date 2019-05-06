import React from 'react';
import NotesList from './NotesList'
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';
export default class NotesApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {// this will hold an array of objects
            notes: [
                {
                    id: '101',
                    title:'first note',
                    text: 'this is the first note'
                },
                {
                    id: '102',
                    title:'second note',
                    text: 'prolly the second note'
                },
                {
                    id: '103',
                    title: 'third note',
                    text: 'will be the third note'
                },


            ]  
        }
    }
    render() {
        return (
            <div className={styles.app}>
                    <NotesList 
                    className={styles.list}
                    notes={this.state.notes}
                    />
                    <NotesDetail 
                    className={styles.detail}
                    
                    />
            </div>
        )
    }
}