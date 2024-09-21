import { useNavigate } from "react-router-dom";
import { WelcomeMessage } from "../welcome/WelcomeMessage";
import ButtonLetter from "../buttonLetter/ButtonLetter";

// A função setLetters é recebida como prop e permite atualizar o estado de 'letters'
export default function PageHeader({ setLetters }) {
  const addNewLetter = () => {
    const newLetter = prompt('Escreva no seu pergaminho. Obs: para adicionar quebra de linhas, dê espaço e coloque a letra maiuscula na próxima palavra!')

    // Caso 'newLetter' seja vazia, mostrar o alerta. O return termina a execução da função
    if(!newLetter) {
      return alert('Escreva, por favor!')
    }
    
    setLetters(prevLetters => {
      // Cria uma cópia do array 'prevLetters' e adiciona um novo objeto com a chave 'letter' e os valores de 'newLetter' e 'rate' zerado
      const updatedLetters = [...prevLetters, { letter: newLetter, rate: 0 }]
      // Transforma o novo array de objetos em uma string para poder ser armazenado no local storage
      localStorage.setItem('letters', JSON.stringify(updatedLetters))
      return updatedLetters
    })
  }

  const navigate = useNavigate()

  const redirectToAddPage = () => {
    navigate('/letter/add')
  }

  return (
    <header className="App-header">
      <ButtonLetter func={redirectToAddPage} type={'button'} classStyle={"add"}>
        Adicionar
      </ButtonLetter>
      <WelcomeMessage />
    </header>
  )
}