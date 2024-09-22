import { PlusOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import './FormLetter.css'
import { useNavigate } from 'react-router-dom';
import ButtonLetter from '../buttonLetter/ButtonLetter';
import { DynamicInput } from '../dynamicInput/DynamicInput';

export function FormLetter({ setLetters }) {
  const navigate = useNavigate()

  const onFinish = ({ letter }) => {
    if(letter !== undefined) {
      setLetters(prevLetters => {
        // Cria uma cópia do array 'prevLetters' e adiciona um novo objeto com a chave 'letter' e os valores de 'newLetter' e 'rate' zerado
        const updatedLetters = [...prevLetters, { letter: letter, rate: 0 }]
        // Transforma o novo array de objetos em uma string para poder ser armazenado no local storage
        localStorage.setItem('letters', JSON.stringify(updatedLetters))
        return updatedLetters
      })
      navigate('/')
    } else {
      alert('Para salvar é necessário adicionar alguma coisa!')
    }
  };

  const onCancel = () => {
    navigate('/')
  }

  return (
    <Form className="form-letter" name="dynamic_form_item" onFinish={onFinish}>
      <Form.List name="letter">
        {(fields, { add, remove }) => (
          <>
            <DynamicInput fields={fields} remove={remove} />
            <Form.Item>
              <ButtonLetter
                type="dashed"
                func={() => add()}
                icon={<PlusOutlined />}
              >
                Adicionar linha
              </ButtonLetter>
            </Form.Item>
          </>
        )}
      </Form.List>
      
      <Form.Item>
        <ButtonLetter type="primary" htmlType="submit">
          Salvar
        </ButtonLetter>

        <ButtonLetter type="primary" func={onCancel}>
          Cancelar
        </ButtonLetter>
      </Form.Item>
    </Form>
  );
};
