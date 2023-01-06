import ProductItem from "../ProductItem";
import { Button, Container, Wrapper } from "./style";

const Products = () => {
  return (
    <Container>
      <h2>Рестораны</h2>

      <Wrapper>
        {Array.from({ length: 9 }).map((_, idx) => (
          <ProductItem key={idx} />
        ))}
      </Wrapper>
      <Button>Показать еще</Button>
    </Container>
  );
};

export default Products;
