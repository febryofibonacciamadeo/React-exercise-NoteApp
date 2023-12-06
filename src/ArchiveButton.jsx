import React from "react";

function Archivebutton({ onArchive, id}) {
    return <button className="contact-item__blue" onClick={() => onArchive(id)}>Archive</button>
}

export default Archivebutton;