import React from "react";

// React-Funktionen
import { useState, useEffect } from "react";

// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Eigene Komponenten
import ListOfItems from "../ListOfItems";

//
//
//

export default function Formular() {
  //~ Variablen
  // Storage:
  let fromLocalStorage = JSON.parse(localStorage.getItem("links"));

  // Speicher-Abfrage
  let initialTodos = fromLocalStorage ? fromLocalStorage: [];

  // useState:
  const [link, setLink] = useState("");
  const [links, setLinks] = useState(initialTodos);

  //~ Funktionen
  // geänderte Eingabe speichern
  const controlInput = (event) => {
    setLink(event.target.value);
  };

  // Submit: Eintrag wird zur Liste hinzugefügt
  const submitTodo = (event) => {
    event.preventDefault();
    console.log("Eintrag eingegangen", link);
    if (link !== "") {
      setLinks((state) => [...state, link]);
    }
  };

  // Löschen-Funktion (Button)
  const deleteHandler = (event) => {
    console.log("delete click", event.target.id);

    setLinks([
      ...links.filter((link, index) => {
        return index != event.target.id;
      }),
    ]);
    console.log(links);
  };

  // Updating
  useEffect(() => {
    // Mach etwas
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  //~ Werte

  //~ HTML / Komponente
  return (
    <>
      <Form onSubmit={submitTodo}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={controlInput} type="text" placeholder="URL / LINK" />
        </Form.Group>

        <Button variant="primary" type="submit">
          speichern
        </Button>
      </Form>
      <ListOfItems items={links} deleteHandler={deleteHandler} anchor/>
    </>
  );
}
