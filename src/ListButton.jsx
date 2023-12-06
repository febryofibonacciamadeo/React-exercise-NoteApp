import React from "react";

function ListButton({ onList, id }) {
    return <button className="contact-item__blue" onClick={() => onList(id)}>List</button>
}

export default ListButton;