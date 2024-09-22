import './LetterList.css'

export function LetterList({ letter }) {
  return (
    <div>
      {letter.map((line, index) => { // itera sobre todos os valores de letter, retornando estes valores "transformados" dentro da tag p
        return <p 
          className='lines' 
          key={index}
        >
          { line }
        </p>
      })}
    </div>
  )
}