import React from 'react';
import NoteItem from './NoteItem';

class NoteList extends React.Component {

  render(){
    return (
      <ul>
        {this.props.notes.map(note => <NoteItem key ={note.id} onClick={this.props.onClick} {...note} />)}
        {/* {console.log(this.props)} */}

      </ul>
    );}
}

export default NoteList;
