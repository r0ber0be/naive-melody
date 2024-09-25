import { message } from 'antd';

export const postLetter = async (letter) => {
  const response = await fetch('http://localhost:3005/letters', {
    method: 'POST',
    headers: new Headers({
      "Content-type": "application/json"
    }),
    body: JSON.stringify({ letter: letter, rate: 0 })
  })

  const data = await response;
  console.log(data)
}

export const getLetters = async (setLetters) => {
  try {
    const response = await fetch('http://localhost:3005/letters')
    const data = await response.json();
    setLetters(data)
  } catch (error) {
    message.error('Não foi possível carregar os dados do servidor! Por favor, tente novamente mais tarde!')
  }
}
