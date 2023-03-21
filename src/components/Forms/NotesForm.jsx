import React from "react";

// React-Funktionen
import { useState, useEffect } from "react";

// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Eigene Komponenten
import ListOfItems from "../ListOfItems";
import store from "../../store/Context"

//
//
//

export default function Formular() {
//~ Variablen
  // Storage:
  let fromLocalStorage = JSON.parse(localStorage.getItem("notes"));

  // Speicher-Abfrage
  let initialTodos = fromLocalStorage ? fromLocalStorage: [];

  // useState:
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(initialTodos);

  // useState 

  //~ Funktionen
  // geänderte Eingabe speichern
  const controlInput = (event) => {
    setNote(event.target.value);
  };

  // Submit: Eintrag wird zur Liste hinzugefügt
  const submitTodo = (event) => {
    event.preventDefault();
    console.log("Eintrag eingegangen", note);
    if (note !== "") {
      setNotes((state) => [...state, note]);
    }
  };

  // Löschen-Funktion (Button)
  const deleteHandler = (event) => {
    console.log("delete click", event.target.id);

    setNotes([
      ...notes.filter((note, index) => {
        return index != event.target.id;
      }),
    ]);
    console.log(notes);
  };

  // Updating
  useEffect(() => {
    // Mach etwas
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  
  //~ Werte

  //~ HTML / Komponente
  return (
    <>
      <Form onSubmit={submitTodo}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control as="textarea" rows={3} onChange={controlInput} type="text" placeholder="Deine Notiz" style={{width: "60%"}} />
        </Form.Group>

        <Button variant="primary" type="submit" >
          speichern
        </Button>
      </Form>
      <ListOfItems items={notes} deleteHandler={deleteHandler} />
    </>
  );
}
