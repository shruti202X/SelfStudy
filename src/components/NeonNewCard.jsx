import { useState } from "react";
import Card from "react-bootstrap/Card";
import ModalNewCard from "./ModalNewCard";
import "./NeonCard.css";

export default function NeonCard({ user_id }) {
  const [modalShow, setModalShow] = useState(false);

  const playSound = () => {
    const sound = new Audio("../../assets/audio/card_click.mp3");
    sound.play();
    setModalShow(true);
  };

  return (
    <>
      <Card className="plus-card-style" onClick={playSound}></Card>
      <ModalNewCard
        show={modalShow}
        onHide={() => setModalShow(false)}
        user_id={user_id}
      />
    </>
  );
}
