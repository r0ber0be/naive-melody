import { PlusOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import './FormLetter.css'
import { useNavigate } from 'react-router-dom';
import ButtonLetter from '../buttonLetter/ButtonLetter';
import { DynamicInput } from '../dynamicInput/DynamicInput';

export function FormLetter() {
  const navigate = useNavigate()

  const onFinish = (values) => {
    if(values.letter !== undefined) {
      navigate('/')
    }
    alert('Para salvar é necessário adicionar alguma coisa!')
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
