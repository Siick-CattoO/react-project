// React
import React from 'react'

// Bootstrap
import Card from 'react-bootstrap/Card';

//
//
//
//! Card-Component
//> Component-Struktur:
//< Input   ~~> text     ~~> für Link-Titel

//
//

// export default function Card() {
//   return (
//     <div>
//         <h2>Topic</h2>
//         <img src="" alt="" />
//         <input type="text" />
//         <ListOfItems/>
//     </div>
//   )
// }

//
//

function ProjectCard() {

  return (
    <Card style={{ width: '18rem', height: '30vh'}}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>Projekt-Titel</Card.Title>
        <Card.Text>
        Infotext von Deinem hinzugefügten Projekt. Wenn Du Magst, kannst du deinen creativen Prozess un herangehensweise hier auch niedershcreiben. So kann man am besten nachvollziehen, wann Du zum Beispiel welche Teile zusammengenäht hast.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;