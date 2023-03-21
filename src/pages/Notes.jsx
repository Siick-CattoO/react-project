import React from "react";
import store from "../store/Context";
import NotesForm from "../components/Forms/NotesForm";

function Notes() {
const {notes} = store().data;

  return (
    <div className="notepad" style={{background: notes.bg}}>
      <h2> {notes.title} </h2>
      <p> {notes.info} </p>
      <NotesForm/>
    </div>
  )
}

export default Notes