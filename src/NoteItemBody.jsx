import React from "react";

function NoteItemBody({ title, body, archive, createdAt }) {
    const createdAtDate = new Date(createdAt);
    const formattedDate = createdAtDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div className="contact-item__body"> 
            <h3 className="contact-item__title">{title}</h3>
            <p className="contact-item__title">{formattedDate}</p>
            <p className="contact-item__username">{body}</p>
            { archive ? <p>Catatan Diarsipkan</p> :  <p>Catatan</p> }
        </div>    
    )
}

export default NoteItemBody;