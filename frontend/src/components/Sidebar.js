import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  
  onClick = (e) => {
    this.props.onClickNewNote(e)
  }

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes = {this.props.notes} onClick ={this.props.onClick} />
        <button onClick = {this.onClick}>New</button>
      </div>
    );
  }
}

export default Sidebar;
