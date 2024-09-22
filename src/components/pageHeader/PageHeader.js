import { useNavigate } from "react-router-dom";
import { WelcomeMessage } from "../welcome/WelcomeMessage";
import ButtonLetter from "../buttonLetter/ButtonLetter";

export default function PageHeader() {
  const navigate = useNavigate() // hook para alterar os endpoints, levando o usuário para outra tela

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