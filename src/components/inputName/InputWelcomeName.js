import { useEffect, useState } from "react"
import './InputWelcomeName.css'

// Responsável pela entrada do nome do usuário e por salva-lo no local storge
export function InputWelcomeName() {
  const [name, setName] = useState(() => localStorage.getItem('name') || 'meu caro')

  useEffect(() => {
    // Atualiza o valor na chave 'name' com o valor do estado atual sempre que 'name' é alterado
    localStorage.setItem('name', name)
  }, [name])

  // Atualiza o valor de 'name' com o valor inserido no input
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