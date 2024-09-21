import { MinusCircleOutlined } from '@ant-design/icons';
import { Form, Input } from "antd";

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
          <MinusCircleOutlined
            onClick={() => remove(field.name)}
          />
        </Form.Item>
      ))}
    </>
  )
}