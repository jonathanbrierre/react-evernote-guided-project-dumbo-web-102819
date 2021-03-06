import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import { allNotesFetch, updateNoteFetch, createNewNoteFetch } from '../Adaptors/Adaptor.js';

class NoteContainer extends Component {
  state = {
    notes: [],
    clickedNote: null,
    objToEdit: null,
    title: '',
    body: '',
    searchTitle: ''
  }

  componentDidMount = () => {
      allNotesFetch().then(json => {
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
    
    updateNoteFetch(id, title, body, user_id).then(() => {
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
  onClickNewNote = (e) => {
    createNewNoteFetch().then(json =>{
      this.setState(prevState =>{ return {...prevState, notes: [...prevState.notes, json]}})
    })
  }

  onClickCancelEdit = (e) => {
    this.setState(prevState => {return {...prevState, objToEdit: null}})
  }

  dynamicSearch = () =>{
      let {searchTitle} = this.state
      let searchResults = this.state.notes.filter(note => searchTitle.toLowerCase() === note.title.slice(0, searchTitle.length).toLowerCase())
      return searchResults
  }

  editSearchTitle = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <Fragment>
        <Search searchTitle ={this.state.searchTitle} editSearchTitle = {this.editSearchTitle} />
        <div className='container'>
          <Sidebar 
            onClick ={this.onClickNote} 
            notes={this.dynamicSearch()}
            onClickNewNote = {this.onClickNewNote}
          />
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
