import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./NeonCard.css";

export default function NeonCard({ subject }) {
  const playSound = () => {
    const sound = new Audio("../../assets/audio/card_click.mp3");
    sound.play();
  };

  return (
    <Card className="card-style" onClick={playSound}>
      <Card.Title className="text-center">{subject.name}</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item className="flex-row points">
          <div>Points</div>
          <div>
            {subject.points_assigned} / {subject.points_got}
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="flex-row percentage">
          <div>Percentage</div>
          <div>{(subject.points_assigned - subject.points_got) * 100}</div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
