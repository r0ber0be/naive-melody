import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Space, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { postLetter } from "../../services/api";
import ButtonLetter from '../buttonLetter/ButtonLetter';
import { DynamicInput } from '../dynamicInput/DynamicInput';
import formattedDate from '../../utils/date';
import './FormLetter.css'

// Recebe setLetters para executar a função de adicionar novas letters
export function FormLetter({ setLetters }) {
  const navigate = useNavigate()
  const author = localStorage.getItem('name')
  const date = formattedDate
  // Função acionada quando a ação de submit é realizada
  const onFinish = async ({ title, letter }) => {
    if(letter && letter.length > 0) {
      try {
        await postLetter(author, title, letter, date)
      } catch (error) {
        message.error('Não foi possível enviar os dados para o servidor! Por favor, tente novamente mais tarde!')
        return
      }

      setLetters(prevLetters => {
        // Atualiza o estado de letters e salva no local storage
        const updatedLetters = [...prevLetters, { author, title, letter: letter, rate: 0, date }]
        return updatedLetters
      })
      navigate('/')
    } else {
      message.warning('Para salvar é necessário adicionar conteúdo ao seu texto!')
    }
  };

  const onCancel = () => {
    navigate('/')
  }

  return (
    <Form className="form-letter" name="dynamic_form_item" onFinish={onFinish}>
      <Form.Item name="title" required={true}>
        <Input placeholder="Insira o título" title="O título da sua carta vai bem aqui!" required />
      </Form.Item>
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
        <Space size={8} wrap>
          <ButtonLetter type="primary" htmlType="submit">
            Salvar
          </ButtonLetter>

          <ButtonLetter type="primary" func={onCancel}>
            Cancelar
          </ButtonLetter>
        </Space>
      </Form.Item>
    </Form>
  );
};
