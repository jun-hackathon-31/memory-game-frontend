import { Card as BootstrapCard, Container, Row, Col } from 'react-bootstrap';
import { CARD_NAMES } from '../../constants';
import { useEffect, useState } from 'react';
import CustomCard from '../Card/Card';
import './Field.css';

function Field({ field, setMovesCount, openModal }) {
  const initializeFieldState = () => {
    return field.map((row) =>
      row.map(() => {
        return { isFlipped: false, isGuessed: false }
      }
    ));
  };

  const [fieldState, setFieldState] = useState(initializeFieldState());
  const [move, setMove] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = ({ rowIndex, colIndex }) => {
    if (move.length < 2) {
      setFieldState((prevState) => {
        const fieldState = [...prevState];
        fieldState[rowIndex] = [...fieldState[rowIndex]];
        fieldState[rowIndex][colIndex] = {
          isFlipped: true,
          isGuessed: prevState[rowIndex][colIndex].isGuessed
        };
        return fieldState;
      })
      
      setMove((prevState) => [...prevState, { rowIndex, colIndex }]);
    }
  };
  
  // compare cards

  useEffect(() => {
    if (move.length === 2) {
      setIsDisabled(true);

      const [firstCard, secondCard] = move;
      
      if (field[firstCard.rowIndex][firstCard.colIndex] ===
          field[secondCard.rowIndex][secondCard.colIndex]) {
        makeCardsGuessed(move);
      } else {
        // flip cards back after time
        setTimeout(() => closeTwoCards(move), 1000);
      }
      // reset move
      setMove([]);
      setMovesCount((prev) => prev + 1);
    }

  }, [move, field, setMovesCount]);

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

      setIsDisabled(false);
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

      setIsDisabled(false);
      return fieldState;
    })
  };

  // check if everything is guessed

  const checkIfWon = () => {
    for (let row of fieldState) {
      for (let element of row) {
        if (!element.isGuessed) {
          return;
        }
      }
    }

    openModal();
  }

  useEffect(() => { checkIfWon(); }, [fieldState]);

  // restart field

  useEffect(() => {
    setFieldState(initializeFieldState());
    setMove([]);
    setIsDisabled(false);
  }, [field]);

  const initializeCards = () => field.map((row, i) => {
    return <Row key={`row ${i}`} className="my-2 mx-2" style={{ gap: '0.5rem' }}>
      {row.map((element, j) =>
        <Col className="px-0" key={`card [${i}, ${j}]`}>
          <CustomCard
            cardUrl={`/${CARD_NAMES[element]}.svg`}
            isFlipped={fieldState[i][j].isFlipped}
            isGuessed={fieldState[i][j].isGuessed}
            coordinates={{ rowIndex: i, colIndex: j }}
            handleClick={handleClick}
          />
        </Col>
      )}
    </Row>
  })

  const cards = initializeCards();

  return (
    <BootstrapCard className={`${isDisabled ? 'disabled' : ''}`}>
      <Container className="p-2">{cards}</Container>
    </BootstrapCard>
  );
}

export default Field;