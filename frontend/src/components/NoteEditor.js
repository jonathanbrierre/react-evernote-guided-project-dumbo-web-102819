import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor">
        <input 
          type="text"  
          name="title" 
          onChange = {this.props.onChangeEdit}
          value = {this.props.title}
        />
        <textarea
          name="body"
          onChange = {this.props.onChangeEdit}
          value = {this.props.body}
        />

        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
