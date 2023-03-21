import React from 'react'
import data from "../data/data.json"

import { createContext, useContext, useState, useEffect } from "react";

const InitialContext = createContext();

export function ParentContext({ children }) {

  // Variables
  const [count, setCount] = useState(0);

// globale Karte erstellen
// da jede Karte gleich aufgebaut werden soll und auf die Daten zugleifen soll
  const [card, setCard] = useState([]);

  // Functions
  // OnClick-Funktion
  const handleOnClick = () => setCount((state) => state + 1)

//
//

//
//

  //: Braucht man nur bei externen fetch
// // Fetch-Funktion (to get data)
// const getData = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   setCards(data);
// };

// useEffect(() => {
//   getData({data});
//   console.log(data);
// }, []);

  // Value
  const value = {data, handleOnClick};

  // HTML/Component Information
  return <InitialContext.Provider value={value}> {children} </InitialContext.Provider>;
}
//° Funktion in einer Zeile schreiben:
const store = () => useContext(InitialContext);  
// Schreibt man eine Funktion mit nur einer Ausgabe, so kann man dies in einer Zeile schreiben, dann braucht man keine geschweiften Klammern.
// Schreibt man eine Funktion mehrzeilig (also mit geschweiften Klammern) braucht man immer ein return

export default store;

