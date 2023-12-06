import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, onList }) {
    return (
        <div className="contact-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} onList={onList} {...note} />
                ))
            }
        </div>
    )
}

export default NoteList;