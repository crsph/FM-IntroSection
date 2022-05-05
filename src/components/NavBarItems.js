import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { ReactComponent as CalendarIcon } from "../assets/icon-calendar.svg";
import { ReactComponent as PlanningIcon } from "../assets/icon-planning.svg";
import { ReactComponent as RemindersIcon } from "../assets/icon-reminders.svg";
import { ReactComponent as TodoIcon } from "../assets/icon-todo.svg";
import "./NavBarItems.scss";

const featureNavItems = [
  { key: "todo-list", icon: TodoIcon, name: "Todo List" },
  { key: "calendar", icon: CalendarIcon, name: "Calendar" },
  { key: "reminders", icon: RemindersIcon, name: "Reminders" },
  { key: "planning", icon: PlanningIcon, name: "Planning" },
];

const companyNavItems = [
  { key: "history", name: "History" },
  { key: "our-team", name: "Our Team" },
  { key: "blog", name: "Blog" },
];

function FeaturesCategory() {
  return (
    <NavDropdown title="Features">
      {featureNavItems.map((featureItems) => {
        return (
          <NavDropdown.Item key={featureItems.key}>
            <featureItems.icon className="icon" />
            {featureItems.name}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}

function CompanyCategory() {
  return (
    <NavDropdown title="Company">
      {companyNavItems.map((companyItems) => {
        return (
          <NavDropdown.Item key={companyItems.key}>
            {companyItems.name}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
}

function CareersCategory() {
  return (
    <Nav.Item>
      <Nav.Link href="#">Careers</Nav.Link>
    </Nav.Item>
  );
}

function AboutCategory() {
  return (
    <Nav.Item>
      <Nav.Link href="#">About</Nav.Link>
    </Nav.Item>
  );
}

export { FeaturesCategory, CompanyCategory, CareersCategory, AboutCategory };
