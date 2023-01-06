import { Container, Content } from "./style";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.List>
          <Content.Item to="/">О нас</Content.Item>
          <Content.Item to="/">Контакты</Content.Item>
          <Content.Item to="/">Пользовательское соглашение</Content.Item>
        </Content.List>
        <span>Служба поддержки: +998 71 200 40 01</span>
      </Content>
      <Content>
        <div className="link">
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTelegramPlane />
          </a>
          <span>Ⓒ 2023 Express24</span>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;
