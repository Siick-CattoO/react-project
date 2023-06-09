// Style
import "../styles/navbar.scss";

// React
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

// Store / global Context
import store from "../store/Context";

//
//
//

export default function NavBar() {
  const { data } = store();

  return (
    <div>
      <nav>
        <NavLink to="/" style={{ background: data.intro.bg }}>
          {data.intro.lash}
        </NavLink>
        <NavLink to="/collection" style={{ background: data.collection.bg }}>
          {data.collection.lash}
        </NavLink>
        <NavLink to="/projects" style={{ background: data.projects.bg }}>
          {data.projects.lash}
        </NavLink>
        <NavLink to="/notes" style={{ background: data.notes.bg }}>
          {data.notes.lash}
        </NavLink>
      </nav>
      <Outlet className="outlet" />
    </div>
  );
}
