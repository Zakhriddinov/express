import Carousel from "../Generic/Carousel";
import { Container, Header } from "./style";
import { MdNavigateNext } from "react-icons/md";
import Products from "../Products";
import CarouselSales from "../Carousel";
const Home = () => {
  return (
    <Container>
      <Carousel />
      <Header>
        <h2>Магазины</h2>
        <Header.Link to="/">
          Показать все <MdNavigateNext />
        </Header.Link>
      </Header>
      <CarouselSales />
      <Products />
    </Container>
  );
};

export default Home;
