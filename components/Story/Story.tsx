import { ListGroup } from "react-bootstrap"

export default function Story() {
  return (
    <div>
      <h1>История</h1>
      <ListGroup>
        <ListGroup.Item>Я пью воду</ListGroup.Item>
        <ListGroup.Item>Я пишу код</ListGroup.Item>
        <ListGroup.Item>Я ем фрукты</ListGroup.Item>
        <ListGroup.Item>Я сплю</ListGroup.Item>
      </ListGroup>
    </div>
  );
}