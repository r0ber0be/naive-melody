import { message } from 'antd';

const baseURL = 'http://localhost:3005/letters'

export const postLetter = async (author, title, letter, date) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: new Headers({
      "Content-type": "application/json"
    }),
    body: JSON.stringify({ author, title, letter: letter, rate: 0, date })
  })

  const newLetter = await response.json()
  return newLetter;
}

export const rateUpdate = async (id, newRate) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'PATCH',
    headers: new Headers({
      "Content-type": "application/json"
    }),
    body: JSON.stringify({ rate: newRate })
  })
}

export const getLetters = async (setLetters) => {
  try {
    const response = await fetch(baseURL)
    const data = await response.json();
    setLetters(data)
  } catch (error) {
    message.error('Não foi possível carregar os dados do servidor! Por favor, tente novamente mais tarde!')
  }
}
