const postLetter = async () => {
  const response = await fetch('http://localhost:3005/letters', {
    method: 'POST',
    headers: new Headers({
      "Content-type": "application/json"
    }),
    body: JSON.stringify(letter)
  })

  const data = await response;
  getLetter();
}