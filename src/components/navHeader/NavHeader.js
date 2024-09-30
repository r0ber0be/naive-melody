import { Divider, Space } from "antd";
import ButtonLetter from "../buttonLetter/ButtonLetter";
import { useNavigate } from "react-router-dom";
import './NavHeader.css';

const dividerStyle = {
  fontFamily: 'Edu AU VIC WA NT Guides, cursive',
  fontOpticalSizing: 'auto',
  fontWeight: '600',
  fontStyle: 'normal',
};

export function NavHeader() {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path)
  }

  return (
    <header className="nav-menu">
      <Divider style={dividerStyle} orientation='center' dashed={true}>Naive Melody</Divider>
      <Space size={40}>
        <ButtonLetter type="dashed" func={() => go('/')}>
          Início
        </ButtonLetter>

        <ButtonLetter type="dashed" func={() => go('/letter/add')}>
          Adicionar nova carta
        </ButtonLetter>
        
        <ButtonLetter type="dashed" func={() => go('/profile')}>
          Perfil
        </ButtonLetter>
      </Space>
    </header>
  )
}