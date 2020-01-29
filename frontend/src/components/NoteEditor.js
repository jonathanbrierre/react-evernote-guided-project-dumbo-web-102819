import React, { Component } from 'react';

class NoteEditor extends Component {

  onSubmit = (e) =>{ 
    this.props.onFormSubmit(e)
  }

  onChange = (e) => {
    this.props.onChangeEdit(e)
  }

  onClick = (e) => {
    this.props.onClickCancelEdit(e)
  }

  render() {
    return (
      <form className="note-editor" onSubmit ={this.onSubmit}>
        <input 
          type="text"  
          name="title" 
          onChange = {this.onChange}
          value = {this.props.title}
        />
        <textarea
          name="body"
          onChange = {this.onChange}
          value = {this.props.body}
        />

        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.onClick}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
