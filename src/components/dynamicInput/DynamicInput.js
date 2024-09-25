import { DeleteTwoTone } from '@ant-design/icons';
import { Form, Input } from "antd";

// Renderiza dinamicamente inputs do formulário, podendo adiciona-los e remove-los
export function DynamicInput({ fields, remove }) {
  if(Array.isArray(fields) && !fields.length) {
    return (
      <>
        <p>Nenhuma linha adicionada por enquanto!</p> 
        <p>Você pode começar a adicionar campos de texto clicando no botão abaixo {':))'}</p>
      </>
    )
  }
  return (
    <>
      {fields.map((field) => (
        <Form.Item required={true} key={field.key}>
          <Form.Item
            name={field.name}
            key={field.fieldKey}
            isListField={field.isListField}
            noStyle
          >
            <Input placeholder="Insira sua frase" title="Escreva qualquer coisa" required />
          </Form.Item>
          {/*Este ícone permite que o input atrelado a ele seja removido*/}
          <DeleteTwoTone
            onClick={() => remove(field.name)}
            twoToneColor="#eb2f96"
          />
        </Form.Item>
      ))}
    </>
  )
}