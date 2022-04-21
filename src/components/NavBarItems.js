import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import "./NavBarItems.scss";

const featureNavItems = [
  { key: "todo-list", icon: "", name: "Todo List" },
  { key: "calendar", icon: "", name: "Calendar" },
  { key: "reminders", icon: "", name: "Reminders" },
  { key: "planning", icon: "", name: "Planning" },
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
          <NavDropdown.Item eventKey={featureItems.key}>
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
          <NavDropdown.Item eventKey={companyItems.key}>
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

