import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./NeonCard.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NeonCard({ subject }) {
  const [percentage, setPercentage] = useState(0);
  const playSound = () => {
    const sound = new Audio("../../assets/audio/card_click.mp3");
    sound.play();
  };
  const handleClick = () => {
    playSound();
  };
  useEffect(() => {
    if (subject.points_assigned == 0) setPercentage(100);
    else
      setPercentage(
        parseFloat(
          ((subject.points_got / subject.points_assigned) * 100).toFixed(2),
        ),
      );
  }, [subject]);

  return (
    <Link to={`/tasks/${subject.subject_id}`}>
      <Card className="card-style" onClick={handleClick}>
        <Card.Title className="text-center">{subject.name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item className="flex-row points">
            <div>Points</div>
            <div>
              {subject.points_got} / {subject.points_assigned}
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="flex-row percentage">
            <div>Percentage</div>
            <div>{percentage}</div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Link>
  );
}
