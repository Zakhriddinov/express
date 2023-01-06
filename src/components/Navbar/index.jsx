import { Outlet, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  FormWrap,
  Input,
  Label,
  Main,
  MapButton,
  Profile,
  Section,
  Wrapper,
} from "./style";
import logo from "../../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import Footer from "../Footer";
import { BiMap } from "react-icons/bi";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/")}>
            <img src={logo} alt="logoimg" className="logo" />
          </Section>
          <Section>
            <FormWrap>
              <Label htmlFor="input">
                <CiSearch />
              </Label>
              <Input
                type="text"
                id="input"
                placeholder="Заведение, блюдо, товар или кухня"
              />
              <Button>Найти</Button>
            </FormWrap>
          </Section>
          <Section>
            <MapButton>
              {" "}
              <BiMap /> <span>Мирабад район, Амира Темура проспект</span>
            </MapButton>
          </Section>
        </Wrapper>
        <Profile>
          <div className="user">
            <CiUser />
            <span>Профиль</span>
          </div>
        </Profile>
      </Main>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
