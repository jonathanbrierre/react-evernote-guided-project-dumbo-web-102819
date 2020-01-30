import React from 'react';

class NoteItem extends React.Component {

  onClickNote = (e) => {
    this.props.onClick(e, this.props.id)
  }
  render(){
    const {title, body} = this.props
    return(
      <li onClick ={this.onClickNote}>
        <h2>{title}</h2>
        <p>{body.slice(0,40)}...</p>
      </li>

    )
  }
}

export default NoteItem;
