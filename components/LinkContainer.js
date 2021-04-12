import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";

export default function Container(route, titleText) {
  return (
  <LinkContainer to={route}>
      <ListGroup.Item action className="py-3 text-nowrap text-truncate">
          <span className="ml-2 font-weight-bold">{titleText}</span>
      </ListGroup.Item>
  </LinkContainer>
  );
}