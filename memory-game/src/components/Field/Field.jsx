import { Card as BootstrapCard, Container, Row, Col } from 'react-bootstrap';
import { CARD_NAMES } from '../../constants';
import { generateField } from '../../utils';
import { useState } from 'react';
import CustomCard from '../Card/Card';

function Field() {
  const [field,] = useState(generateField());
  
  const cards = field.map((row, i) => {
    return <Row key={`row ${i}`} className="my-2 mx-2" style={{ gap: '0.5rem'}}>{row.map((element, j) =>
      <Col className="px-0" key={`card [${i}, ${j}]`}><CustomCard cardUrl={`src/images/${CARD_NAMES[element]}.svg`} /></Col>
    )}</Row>
  });

  return (
    <BootstrapCard>
      <Container className="p-2">{cards}</Container>   
    </BootstrapCard>
  );
}

export default Field;