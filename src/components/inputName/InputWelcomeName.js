import { useEffect, useState } from "react"
import './InputWelcomeName.css'

export function InputWelcomeName() {
  // Inicializa name com 'meu caro' por padrão quando não houverem valores armazenados na chave 'name' no local storage
  const [name, setName] = useState(() => localStorage.getItem('name') || 'meu caro')

  useEffect(() => {
    // Atualiza o valor na chave 'name' com o valor do estado atual da constante 'name'
    localStorage.setItem('name', name)
  }, [name]) // Faz o useEffect ser disparado sempre que a constante 'name' sofre modificações

  // Captura o valor no input e modifica 'name'
  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  return (
    <input 
      id="name" 
      title="Clique aqui para mudar o seu nome"
      type="text" 
      className="name"
      value={name} 
      autoComplete="name"
      onChange={handleNameChange}
      maxLength={20}
      style={{ 
        width: `${name.length * 16}px`, 
        maxWidth: '300px', 
        fontWeight: "bolder"
      }}
    />
  )
}