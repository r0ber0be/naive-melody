import { Rate } from "antd";
import './RatingLetter.css'

// Renderiza o sistema de notas, iniciando rate com zero e podendo atualizar este valor
export function RatingLetter({ setLetters, index, rateValue }) {
  const updateRate = (newRate) => {
    setLetters(prevLetters => {
      // Cria uma lista e adiciona 'rate' para uma letter onde as condições sejam verdadeiras
      const updatedLetters = prevLetters.map((letter, i) => {
        // Condição verdadeira se o indice atual corresponder com o indice da letter  
        if(index === i) { 
          return { ...letter, rate: newRate } // Atualiza a letter no rate no indice da letter atual
        }
        return letter // Retorna as letters restante sem modifica-las
      })
      // Atualiza o local storage utilizando as letters atualizadas
      localStorage.setItem('letters', JSON.stringify(updatedLetters))
      return updatedLetters // Retorna as atualizações para o estado, salvando-o
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