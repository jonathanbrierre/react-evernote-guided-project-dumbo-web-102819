import React from 'react';

class NoteItem extends React.Component {
  render(){
    const {title, body, id} = this.props
    return(
      <li onClick ={(e) => this.props.onClick(e, id)}>
        <h2>{title}</h2>
        <p>{body}</p>
      </li>

    )
  }
}

export default NoteItem;
