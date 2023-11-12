import { Card as BootstrapCard, Container, Row, Col } from 'react-bootstrap';
import { CARD_NAMES } from '../../constants';
import { generateField } from '../../utils';
import { useEffect, useState } from 'react';
import CustomCard from '../Card/Card';

function Field() {
  const [field,] = useState(generateField());
  const [fieldState, setFieldState] = useState(field.map((row) => row.map(() => {
    return { isFlipped: false, isGuessed: false }
  })));
  const [move, setMove] = useState([]);

  const handleClick = ({ rowIndex, colIndex }) => {
    if (move.length < 2) {
      console.log(rowIndex, colIndex);
      
      setFieldState((prevState) => {
        const fieldState = [...prevState];
        fieldState[rowIndex] = [...fieldState[rowIndex]];
        fieldState[rowIndex][colIndex] = {
          isFlipped: true,
          isGuessed: prevState[rowIndex][colIndex].isGuessed
        };
        return fieldState;
      })
      console.log(fieldState);
      
      setMove((prevState) => [...prevState, { rowIndex, colIndex }]);
      console.log(move);
    }
  }

  useEffect(() => {
    if (move.length === 2) {
      // compare cards

      const [firstCard, secondCard] = move;
      
      if (field[firstCard.rowIndex][firstCard.colIndex] ===
          field[secondCard.rowIndex][secondCard.colIndex]) {
        console.log('YES');
        makeCardsGuessed(move);
      } else {
        console.log('NO');
        // flip cards back after time
        setTimeout(() => closeTwoCards(move), 1500);
      }
      // reset move
      setMove([]);
    }

  }, [move, field]);

  const makeCardsGuessed = (cards) => {
    const [firstCard, secondCard] = cards;
    const { rowIndex: firstRowIndex, colIndex: firstColIndex } = firstCard;
    const { rowIndex: secondRowIndex, colIndex: secondColIndex } = secondCard;

    setFieldState((prevState) => {
      const fieldState = [...prevState];

      fieldState[firstRowIndex] = [...fieldState[firstRowIndex]];
      fieldState[secondRowIndex] = [...fieldState[secondRowIndex]];

      fieldState[firstRowIndex][firstColIndex] = {
        isFlipped: prevState[firstRowIndex][firstColIndex].isFlipped,
        isGuessed: true
      };
      fieldState[secondRowIndex][secondColIndex] = {
        isFlipped: prevState[secondRowIndex][secondColIndex].isFlipped,
        isGuessed: true
      };

      return fieldState;
    })
  }

  const closeTwoCards = (cards) => {
    const [firstCard, secondCard] = cards;
    const { rowIndex: firstRowIndex, colIndex: firstColIndex } = firstCard;
    const { rowIndex: secondRowIndex, colIndex: secondColIndex } = secondCard;

    setFieldState((prevState) => {
      const fieldState = [...prevState];

      fieldState[firstRowIndex] = [...fieldState[firstRowIndex]];
      fieldState[secondRowIndex] = [...fieldState[secondRowIndex]];

      fieldState[firstRowIndex][firstColIndex] = {
        isFlipped: false,
        isGuessed: prevState[firstRowIndex][firstColIndex].isGuessed
      };
      fieldState[secondRowIndex][secondColIndex] = {
        isFlipped: false,
        isGuessed: prevState[secondRowIndex][secondColIndex].isGuessed
      };

      return fieldState;
    })
  };

  const cards = field.map((row, i) => {
    return <Row key={`row ${i}`} className="my-2 mx-2" style={{ gap: '0.5rem' }}>
      {row.map((element, j) =>
        <Col className="px-0" key={`card [${i}, ${j}]`}>
          <CustomCard
            cardUrl={`src/images/${CARD_NAMES[element]}.svg`}
            isFlipped={fieldState[i][j].isFlipped}
            isGuessed={fieldState[i][j].isGuessed}
            coordinates={{ rowIndex: i, colIndex: j }}
            handleClick={handleClick}
          />
        </Col>
      )}
    </Row>
  });

  return (
    <BootstrapCard>
      <Container className="p-2">{cards}</Container>   
    </BootstrapCard>
  );
}

export default Field;