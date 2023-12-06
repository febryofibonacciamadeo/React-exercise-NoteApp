import React from "react";

class CreateNote extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            title : '',
            body : '',
            maxLength : 50 
        };
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChangeTitle(event) {
        if(this.state.title.length <= this.state.maxLength) {
            this.setState(() => {
                return {
                    title: event.target.value
                }
            })
        }
    }

    onChangeBody(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onChangeTitle}/>
                <span>{this.state.maxLength - this.state.title.length}/{this.state.maxLength}</span>
                <textarea type="text" placeholder="Catatan" value={this.state.body} onChange={this.onChangeBody}/>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default CreateNote;