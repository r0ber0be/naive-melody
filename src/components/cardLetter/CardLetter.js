import { useState } from 'react';
import { Card, Flex } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import ButtonLetter from '../buttonLetter/ButtonLetter';
import { LetterList } from '../letterList/LetterList';
import { RatingLetter } from '../ratingLetter/RatingLetter';
import { Title } from '../title/Title';
import { Paragraph } from '../paragraph/Paragraph';
import './CardLetter.css'

  const cardStyle = {
    width: '80%',
  };

  // Recebe letters e permite navegar entre elas, também fornecendo um sistema de avaliação
  export function CardLetter({ letters, setLetters }) {
    const [index, setIndex] = useState(0)
    const currentLetter = letters[index].letter
    const currentRate = letters[index].rate
    const currentTitle = letters[index].title
    const currentAuthor = letters[index].author
    const currentDate = letters[index].date
    const currentId = letters[index].id

    const next = (e) => {
      e.preventDefault()
      // Enquanto o tamanho do vetor 'letters' for maior que o indice, é possível seguir para a próxima letter
      if(index < letters.length-1) {
        setIndex(prevIndex => prevIndex+1) // Incrementa o indice
      }
    }

    const previous = (e) => {
      e.preventDefault()
      // Garante que o indice não seja menor que zero
      if(index > 0) {
        setIndex(prevIndex => prevIndex-1) // Decrementa o indice
      }
    }

    return (
      <Card
        className="card-container"
        hoverable
        style={cardStyle}
        styles={{
          body: {
            padding: 0,
            overflow: 'hidden',
            backgroundColor: '#FFFFF8',
            backgroundImage: 'linear-gradient(to bottom, #8080800A 2px, transparent 2px)',
            backgroundSize: '32px 32px'
          },
        }}
      >
        <Flex justify="space-between" align="center">
          <ButtonLetter func={previous} type='button' classStyle={"go-back"} icon={<DoubleLeftOutlined />} />
          <Flex
            vertical
            align="flex-end"
            justify="space-between"
            style={{
              padding: 32,
              paddingBottom: 0
            }}
          >
            <Title title={currentTitle} />
            <Paragraph>
              <LetterList letter={currentLetter} />
            </Paragraph>
          </Flex>
          <ButtonLetter func={next} type='button' classStyle={"go-back"} icon={<DoubleRightOutlined />} />
        </Flex>
        <Flex>
          <RatingLetter id={currentId} author={currentAuthor} date={currentDate} setLetters={setLetters} index={index} rateValue={currentRate} />
        </Flex>
      </Card>
    )
  }
