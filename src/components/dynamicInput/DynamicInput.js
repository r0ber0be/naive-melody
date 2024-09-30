import { DeleteTwoTone } from '@ant-design/icons';
import { Form, Input, Space } from "antd";
import ButtonLetter from '../buttonLetter/ButtonLetter';

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
            <Space.Compact block>
              <Input
                placeholder="Insira sua frase" title="Escreva qualquer coisa" required
              />
              <ButtonLetter type="primary" func={() => remove(field.name)}>
                {/*Este ícone permite a remoção do input atrelado a ele*/}
                <DeleteTwoTone twoToneColor="#eb2f96" />
              </ButtonLetter>
            </Space.Compact>
          </Form.Item>
        </Form.Item>
      ))}
    </>
  )
}