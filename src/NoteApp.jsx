import React from "react";
import CreateNote from "./CreateNote";
import { getNote } from "./utils/notes";
import NoteList from "./NoteList";
import SearchNote from "./SearchNote";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : getNote(),
        }
        this.addNote = this.addNote.bind(this);
        this.destroyNote = this.destroyNote.bind(this);
        this.searchNote = this.searchNote.bind(this);
        this.archiveNote = this.archiveNote.bind(this);
        this.listNote = this.listNote.bind(this)
    }

    searchNote(noteTitle) {
        const notes = this.state.notes.filter(note => note.title.includes(noteTitle));
        this.setState({ notes });
    }

    addNote({ title, body }) {
        this.setState((prevState) => {
            return {
                notes : [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archive: false,
                        createdAt: Date()
                    }
                ]
            }
        });
    }
    
    archiveNote(id) {
        const notes = this.state.notes;
        const noteToArchive = notes.find(note => note.id === id);
        
        if (noteToArchive) {
            noteToArchive.archive = true;
            this.setState({ notes });
        }
    }   

    listNote(id) {
        const notes = this.state.notes;
        const noteToArchive = notes.find(note => note.id === id);
        
        if (noteToArchive) {
            noteToArchive.archive = false;
            this.setState({ notes });
        }
    }

    destroyNote(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    renderEmptyState(message) {
        return (
            <div className="contact-item">
                <div className="contact-item__body">
                    <h3>{message}</h3>
                </div>
            </div>
        );
    }

    renderNoteSection(title, noteList) {
        return (
            <div>
                <h2>{title}</h2>
                {noteList.length ? (
                    <NoteList notes={noteList} onDelete={this.destroyNote} onArchive={this.archiveNote} onList={this.listNote} />
                ) : (
                    this.renderEmptyState("Tidak ada catatan")
                )}
            </div>
        );
    }

    render() {  
        const { notes } = this.state;
        return(
            <div className="contact-app">
                <h1>NoteApp</h1>
                <h2>Cari Catatan</h2>
                <SearchNote searchNote={this.searchNote}/>
                <h2>Tambah Catatan</h2>
                <CreateNote addNote={this.addNote} />
                {this.renderNoteSection("Catatan", notes.filter(note => !note.archive))}
                {this.renderNoteSection("Arsip Catatan", notes.filter(note => note.archive))}          
            </div>
        )
    }
}

export default NoteApp;