import React from "react";
import Card from "react-bootstrap/Card";

const SubjectCard = ({ subject }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{subject.name}</Card.Title>
        <Card.Text>
          <strong>Total Points: </strong> {subject.points_assigned}
          <strong>Received Points: </strong> {subject.points_got}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SubjectCard;
