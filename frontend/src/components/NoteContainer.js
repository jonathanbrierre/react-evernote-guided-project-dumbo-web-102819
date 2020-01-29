import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import * as Fetches from '../Adaptors/Adaptor.js';

class NoteContainer extends Component {
  state = {
    notes: [],
    clickedNote: null,
    objToEdit: null,
    title: '',
    body: ''
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/notes')
      .then(r => r.json())
      .then(json => {
        this.setState(prevState => {
          return {...prevState, notes: json}
        } )
      })
  }

  onClickNote = (e, id) => {
    const clicked = this.state.notes.find(note => note.id === id)
    this.setState(prevState => { return {...prevState, clickedNote: clicked, objToEdit: null}})
  }

  onClickEdit = (note) => {
    this.setState(prevState => {return {...prevState, objToEdit: note, title: note.title, body: note.body}})
  }

  onChangeEdit = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const {id, user_id} = this.state.clickedNote
    const {title, body} = this.state

    Fetches.updateNoteFetch(id, title, body, user_id).then(() => {
        let updatedNotes = this.state.notes.map(note => {
          if(note.id === id){
            let newNote = {...note, title: this.state.title, body: this.state.body}
            this.setState(prevState => { return {...prevState, clickedNote: newNote}})
            return newNote
          }else{
            return note
          }
        })
        
        this.setState(prevState => {return {...prevState, notes: updatedNotes }})
      })
  }

  onClickCancelEdit = (e) => {
    this.setState(prevState => {return {...prevState, objToEdit: null}})
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar onClick ={this.onClickNote} notes={this.state.notes}/>
          <Content 
            clickedNote ={this.state.clickedNote} 
            objToEdit ={this.state.objToEdit} 
            title={this.state.title}
            body={this.state.body}
            // functions
            onClickEdit = {this.onClickEdit} 
            onChangeEdit = {this.onChangeEdit}
            onFormSubmit = {this.onFormSubmit}
            onClickCancelEdit = {this.onClickCancelEdit}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
