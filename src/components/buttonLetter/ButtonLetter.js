import { Button } from 'antd';
import './ButtonLetter.css';

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