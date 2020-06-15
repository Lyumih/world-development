import { Button, FormControl } from "react-bootstrap";

export default function ConsoleForm() {
  return (
    <div>
      <h1>Консоль</h1>
      <div>
        <FormControl type="text" className="mb-3" placeholder="Введите команду" />
        <Button>Отправить</Button>
      </div>
    </div>
  );
}
