import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <Nav>
      <NavDropdown className="nav-dropdown" title="Features">
        <div className="item-container">
          <NavDropdown.Item eventKey="todo-list">Todo List</NavDropdown.Item>
          <NavDropdown.Item eventKey="calendar">Calendar</NavDropdown.Item>
          <NavDropdown.Item eventKey="reminders">Reminders</NavDropdown.Item>
          <NavDropdown.Item eventKey="planning">Planning</NavDropdown.Item>
        </div>
      </NavDropdown>
    </Nav>
  );
}
