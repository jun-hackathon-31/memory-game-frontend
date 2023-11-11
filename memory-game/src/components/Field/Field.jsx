import Card from 'react-bootstrap/Card';
import { generateField } from '../../utils';

function Field() {
  console.log(generateField());
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>Тут будут карточки</Card.Body>
    </Card>
  );
}

export default Field;