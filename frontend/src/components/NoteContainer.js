import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

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

  onClick = (e, id) => {
    const clicked = this.state.notes.find(note => note.id === id)
    this.setState(prevState => { return {...prevState, clickedNote: clicked, objToEdit: null}})
  }

  onClickEdit = (note) => {
    this.setState(prevState => {return {...prevState, objToEdit: note, title: note.title, body: note.body}})
  }

  onChangeEdit = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
    
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar onClick ={this.onClick} notes={this.state.notes}/>
          <Content 
            clickedNote ={this.state.clickedNote} 
            objToEdit ={this.state.objToEdit} 
            onClickEdit = {this.onClickEdit} 
            onChangeEdit = {this.onChangeEdit}
            title={this.state.title}
            body={this.state.body}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
