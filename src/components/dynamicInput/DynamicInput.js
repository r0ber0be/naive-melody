import { MinusCircleOutlined } from '@ant-design/icons';
import { Form, Input } from "antd";

// Renderiza dinamicamente inputs do formulário, podendo adiciona-los e remove-los
export function DynamicInput({ fields, remove }) {
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
          <MinusCircleOutlined
            onClick={() => remove(field.name)}
          />
        </Form.Item>
      ))}
    </>
  )
}