import { InputWelcomeName } from '../inputName/InputWelcomeName';

export function WelcomeMessage() {
  return (
    <h1 className='welcome'>Olá, mais uma vez, {' '} 
      <InputWelcomeName />
    </h1>
  )
}