import React from 'react';
import NotesList from './NotesList'
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';
export default class NotesApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {// this will hold an array of objects
            selectedNote: '101',
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
        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id);
        return (
            <div className={styles.app}>
                    <NotesList 
                    className={styles.list}
                    notes={this.state.notes}
                    handleSelection={this._selectNote}
                    />
                    <NotesDetail 
                    className={styles.detail}
                    note={theNote}
                    handleSave={this._updateNote}
                    />
            </div>
        );
    }
    _selectNote = (id) => {
        // choose note to show
        this.setState({
            selectedNote: id
        });
    }
    _updateNote = (idToUpdate, newText) => {
        // cant simply reassign the item in the array. cant mutate state
        // need to create new array with all the existing notes (data) but want to use the newText for the note with id === idToUpdate
        // both versions below work and either can be used
//          ===================================================
// version 1
        const updatedNotes1 = this.state.notes.map(note => {
            if(note.id === idToUpdate){
                // return modified as is
                return {
                    ...note,    // spread out all existing key-value pairs
                    text: newText // but only overwrite just the text property
                };
            } else{
                // return a copy of the note as is
                return {
                    ...note
                };
            }
        });
        this.setState({
            notes:updatedNotes1
        });
        //=============================================================
        // version 2
        // const updatedNotes2 = this.state.notes.filter(note => {
        //     return note.id !== idToUpdate;
        // });
        // const theNoteToUpdate = this.state.notes.find(note => note.id === idToUpdate);
        // this.setState({
        //     notes: [
        //         ...updatedNotes2,
        //         {
        //             ...theNoteToUpdate,
        //             text: newText
        //         }
        //     ]
        // });
    }
}