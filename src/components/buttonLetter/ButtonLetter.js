import { Button } from 'antd';
import './ButtonLetter.css';

// Este componente utiliza o Button do Ant Design, e pode receber propriedades como icon, função de clique e etc
export default function ButtonLetter({ type, func, classStyle, htmlType, icon, children }) {
  return (
    <Button 
      type={type}
      onClick={func}
      className={classStyle}
      htmlType={htmlType}
      icon={icon}
    >
      <strong>
        {children}
      </strong>
    </Button>
  )
}