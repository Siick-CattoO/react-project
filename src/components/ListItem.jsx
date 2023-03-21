// React
import React from "react";

// Bootstrap
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

//
//
// Objekt muss veränderbar sein

// Component-Struktur:
// Input   ~~> text     ~~> für Link-Titel
// Input   ~~> text     ~~> für den Link selbst
// Button  ~~> onCick   ~~> zum bearbeiten / icon(Stift)
// Button  ~~> onSubmit ~~> zum abspeichern

//
// Hier muss zu einem "local storage" verlinkt werden, 
// um die eingetragenen Links auf der Seite zu speichern und wieder abrufen zu können
//

//
// anchor-Abfrage:
// Ist es ein Anchor ? Wenn der Eintrag ein Link ist, mach daraus ein Anchor-Tag
//
//

export default function ListItem(props) {

  const { input, deleteHandler, id, anchor } = props;
  return (
    <ListGroup.Item as="li">
      {anchor ? (
        <a href={input} target="_blank">
          {" "}
          {input}{" "}
        </a>
      ) : (
        input
      )}
      <Button id={id} onClick={deleteHandler} variant="danger">
        {" "}
        löschen{" "}
      </Button>
    </ListGroup.Item>
  );
}
