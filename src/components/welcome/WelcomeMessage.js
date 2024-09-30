import { InputWelcomeName } from '../inputName/InputWelcomeName';
import './WelcomeMessage.css'

export function WelcomeMessage() {
  return (
    <div className='profile'>
      <h1>Olá, mais uma vez, {' '} 
        <InputWelcomeName />
      </h1>
    </div>
  )
}