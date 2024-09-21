export function LetterList({ splitedLetters, index }) {
  return (
    <div>
      {splitedLetters[index].map((l, index) => { //Quando o indice é incrementado ou decrementado, a posição do array letters se altera, fazendo com que uma nova letter seja exibida
        return <p key={index}>{l}</p>
      })}
    </div>
  )
}