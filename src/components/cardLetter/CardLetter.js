import { useState } from 'react';
import './CardLetter.css'
import Button from '../button/Button';
import { letterSpliter } from '../../utils/letterSpliter';
import { LetterList } from '../letterList/LetterList';
import { RatingLetter } from '../ratingLetter/RatingLetter';

export function CardLetter({ letters, setLetters }) {
  const splitedLetters = letterSpliter(letters)
  const [index, setIndex] = useState(0)

  const next = (e) => {
    e.preventDefault()
    // Enquanto o tamanho do vetor 'letters' for maior que meu indice, é possível incrementar o indice
    if(index < letters.length-1) {
      setIndex(prevIndex => prevIndex+1) // Incrimenta o indice
    }
  }

  const previous = (e) => {
    e.preventDefault()
    // O tamanho de um array com 1 elemento começa em 1 enquanto o index de um array inicia em 0
    if(index > 0) {
      setIndex(prevIndex => prevIndex-1) // Decrementa o indice
    }
  }

  return (
    <>
      <div className='card-container'>
        <Button func={previous} text={"<<<"} classStyle={"go-back"} />
        <LetterList splitedLetters={splitedLetters} index={index} />
        <Button func={next} text={">>>"} classStyle={"go-back"} />
      </div>
      <RatingLetter setLetters={setLetters} index={index} rateValue={letters[index].rate} />
    </>
  )
}
       
     