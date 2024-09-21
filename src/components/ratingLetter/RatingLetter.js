import './RatingLetter.css'
import { Rate } from "antd";

export function RatingLetter({ setLetters, index, rateValue }) {
  const updateRate = (newRate) => {
    setLetters(prevLetters => {
      // Cria uma cópia do array 'prevLetters' e adiciona um novo objeto com a chave 'letter' e os valores de 'newLetter' e 'rate' zerado
      const updatedLetters = prevLetters.map((letter, i) => {
        if(index === i) { 
          return { ...letter, rate: newRate } // Atualiza o rate no indice da letter atual
        }
        return letter
      })
      // Transforma o novo array de objetos em uma string para poder ser armazenado no local storage
      localStorage.setItem('letters', JSON.stringify(updatedLetters))
      return updatedLetters
    })
  }

  return (
    <Rate 
      onChange={(newRate) => updateRate(newRate)}
      className="rate"
      allowHalf
      value={rateValue}
      defaultValue={0}
    />
  )
}