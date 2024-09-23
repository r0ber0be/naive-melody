import { useState } from 'react';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import './CardLetter.css'
import ButtonLetter from '../buttonLetter/ButtonLetter';
import { LetterList } from '../letterList/LetterList';
import { RatingLetter } from '../ratingLetter/RatingLetter';

// Recebe letters e permite navegar entre elas, também fornecendo um sistema de avaliação
export function CardLetter({ letters, setLetters }) {
  const [index, setIndex] = useState(0)
  const currentLetter = letters[index].letter
  const currentRate = letters[index].rate

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
    <>
      <div className='card-container'>
        <ButtonLetter func={previous} type='button' classStyle={"go-back"} icon={<DoubleLeftOutlined />} />
        <LetterList letter={currentLetter} />
        <ButtonLetter func={next} type='button' classStyle={"go-back"} icon={<DoubleRightOutlined />} />
      </div>
      <RatingLetter setLetters={setLetters} index={index} rateValue={currentRate} />
    </>
  )
}
       
     