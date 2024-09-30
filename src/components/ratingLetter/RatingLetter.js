import { Rate, message } from "antd";
import Meta from "antd/es/card/Meta";
import './RatingLetter.css'
import { rateUpdate } from "../../services/api";

// Renderiza o sistema de notas, iniciando rate com zero e podendo atualizar este valor
export function RatingLetter({ id, author, date, setLetters, index, rateValue }) {
  const updateRate = async (newRate) => {
    try {
      await rateUpdate(id, newRate)
    } catch (error) {
      message.error('Não foi possível salvar sua nota! Por favor, tente novamente mais tarde!')
      return
    }

    setLetters(prevLetters => {
      // Cria uma lista e adiciona 'rate' para uma letter onde as condições sejam verdadeiras
      const updatedLetters = prevLetters.map((letter, i) => {
        // Condição verdadeira se o indice atual corresponder com o indice da letter  
        if(index === i) { 
          return { ...letter, rate: newRate } // Atualiza a letter no rate no indice da letter atual
        }
        return letter // Retorna as letters restante sem modifica-las
      })
      return updatedLetters // Retorna as atualizações para o estado, salvando-o
    })
  }

  return (
    <>
      <Meta style={{padding:'8px 26px'}} title={`por ${author}`} />
      <Rate 
        onChange={(newRate) => updateRate(newRate)}
        className="rate"
        allowHalf
        value={rateValue}
        defaultValue={0}
      />
      <Meta style={{padding:'8px 26px', textDecoration: 'underline', color: '#1A2D5C'}} title={date} />
    </>
  )
}