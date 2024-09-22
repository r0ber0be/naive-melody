import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <h3>Aparentemente esta página não existe 
        <i>{` (ainda)`}</i>. 
      </h3>
      <p>Tente novamente mais tarde, por favor!</p>
    </div>
  )
}