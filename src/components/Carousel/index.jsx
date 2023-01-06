import { Container, Content, Wrap } from "./style";

const CarouselSales = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <Container {...settings}>
      <Wrap>
        <Content to="/">
          <img
            src="https://cdn.express24.uz/i/700/700/ZWoE7Fxbyy7y9lbpibC4c.jpg "
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
      <Wrap>
        <Content>
          <img
            src="https://cdn.express24.uz/i/700/700/UisJ9LYLBlZTJhno7i-qm.jpg"
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
      <Wrap>
        <Content>
          <img
            src="https://cdn.express24.uz/i/700/700/qwm3Sh3A-uCm6qxsF58Zq.jpg"
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
      <Wrap>
        <Content>
          <img
            src="https://cdn.express24.uz/i/700/700/BQb1mLaDxd_jlZsu2pT2G.jpg"
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
      <Wrap>
        <Content>
          <img
            src="https://cdn.express24.uz/i/567/385/phZSLrYq1E6D9_l-Gxn1D.jpg"
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
      <Wrap>
        <Content to="/">
          <img
            src="https://cdn.express24.uz/i/700/700/ZWoE7Fxbyy7y9lbpibC4c.jpg "
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
      <Wrap>
        <Content>
          <img
            src="https://cdn.express24.uz/i/700/700/UisJ9LYLBlZTJhno7i-qm.jpg"
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
      <Wrap>
        <Content>
          <img
            src="https://cdn.express24.uz/i/700/700/qwm3Sh3A-uCm6qxsF58Zq.jpg"
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
      <Wrap>
        <Content>
          <img
            src="https://cdn.express24.uz/i/700/700/BQb1mLaDxd_jlZsu2pT2G.jpg"
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
      <Wrap>
        <Content>
          <img
            src="https://cdn.express24.uz/i/567/385/phZSLrYq1E6D9_l-Gxn1D.jpg"
            alt="img"
          />
        </Content>
        <h3>The Mart</h3>
        <p>Продукты</p>
      </Wrap>
    </Container>
  );
};

export default CarouselSales;
