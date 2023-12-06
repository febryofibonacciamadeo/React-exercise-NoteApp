import React from "react";
import NoteItemBody from './NoteItemBody';
import DeleteButton from "./DeleteButton";
import Archivebutton from "./ArchiveButton";
import ListButton from "./ListButton";

function NoteItem({ title, body, archive, createdAt, id, onDelete, onArchive, onList }) {
    return(
        <div key={id} className="contact-item">
            <NoteItemBody title={title} body={body} archive={archive} createdAt={createdAt}/>
            <DeleteButton id={id} onDelete={onDelete} />
            {archive ? 
                <ListButton id={id} onList={onList}/>
                :
                <Archivebutton id={id} onArchive={onArchive}/>
            }
        </div>
    )
}

export default NoteItem;