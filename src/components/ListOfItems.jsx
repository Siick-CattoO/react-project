// Style
import "../styles/listOfItems.scss";

// React
import React from "react";

// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

// Eigene Komponente
import ListItem from "./ListItem";

//
//

//> Objekt muss veränderbar sein

//> Component-Struktur:
// usorted list    ~~> für die Link-Sammlung
// li-Komponente   ~~> gespeicherte Links
// neues Objekt = neue li-Komponente erstellen

//
//

export default function ListOfItems(props) {

  //~ Variable
  const { items, deleteHandler, anchor } = props;

  return (
    <ListGroup as="ol" numbered>
      {items
        ? items.map((item, index) => {
            return <ListItem 
            key={index} 
            id={index} 
            input={item} 
            anchor={anchor}
            deleteHandler={deleteHandler} />;
          })
        : "No items"}
    </ListGroup>
  );
}
