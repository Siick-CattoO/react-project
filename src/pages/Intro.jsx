// Style
import "../styles/intro.scss"

// React
import React from "react";

// Store / global Context
import store from "../store/Context";

//
//
//

export default function Intro() {
const {intro} = store().data;

  return (
    <div className="notepad" style={{background: intro.bg}}>
      <h2> {intro.title} </h2>
      <p> {intro.info} </p>
      <div className="intro-pics">
        <img src="./carousel7.jpeg" alt="" />
        <img src="./carousel4.jpeg" alt="" />
        <img src="./carousel6.jpeg" alt="" />
        <img src="./carousel2.jpeg" alt="" />
        <img src="./carousel3.jpeg" alt="" />
        <img src="./carousel5.jpeg" alt="" />
      </div>
    </div>
  );
}
