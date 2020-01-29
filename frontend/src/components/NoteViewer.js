import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.noteObj.title}</h2>
      <p>{props.noteObj.body}</p>
      <button onClick ={(e) => props.onClickEdit(props.noteObj)}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
