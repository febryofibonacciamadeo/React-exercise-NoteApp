import React from "react";

class SearchNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleNote: ''
        }
        this.onChangeTitleNote = this.onChangeTitleNote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTitleNote(event) {
        this.setState(() => {
            return{
                titleNote: event.target.value
            }
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.searchNote(this.state.titleNote);
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Cari catatan" value={this.state.titleNote} onChange={this.onChangeTitleNote}/>
                <button type="submit">Cari</button>
            </form>
        )
    }
}

export default SearchNote;