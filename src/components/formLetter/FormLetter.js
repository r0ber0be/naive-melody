import { PlusOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { postLetter } from "../../services/api";
import './FormLetter.css'
import { useNavigate } from 'react-router-dom';
import ButtonLetter from '../buttonLetter/ButtonLetter';
import { DynamicInput } from '../dynamicInput/DynamicInput';

// Recebe setLetters para executar a função de adicionar novas letters
export function FormLetter({ setLetters }) {
  const navigate = useNavigate()

  // Função acionada quando a ação de submit é realizada
  const onFinish = async ({ letter }) => {
    if(letter !== undefined) {
      await postLetter(letter)
      setLetters(prevLetters => {
        // Atualiza o estado de letters e salva no local storage
        const updatedLetters = [...prevLetters, { letter: letter, rate: 0 }]
        console.log({ letter: letter, rate: 0 })
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
