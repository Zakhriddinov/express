import { Container, Content } from "./style";

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  return (
    <Container {...settings}>
      <Content to="/">
        <img
          src="https://cdn.express24.uz/i/567/385/4cIkJ7iqfBOhual1QRc_1.jpg"
          alt="img"
        />
      </Content>
      <Content>
        <img
          src="https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg"
          alt="img"
        />
      </Content>
      <Content>
        <img
          src="https://cdn.express24.uz/i/567/385/ZlVLKYW8-AdywtyncdzS7.jpg"
          alt="img"
        />
      </Content>
      <Content>
        <img
          src="https://cdn.express24.uz/i/567/385/5UNfA3P-QPEZaEfuRhD0y.jpg"
          alt="img"
        />
      </Content>
      <Content>
        <img
          src="https://cdn.express24.uz/i/567/385/phZSLrYq1E6D9_l-Gxn1D.jpg"
          alt="img"
        />
      </Content>
      <Content>
        <img
          src="https://cdn.express24.uz/i/567/385/HJnzvgLmjpQ4YkjNIdznm.jpg"
          alt="img"
        />
      </Content>
      <Content>
        <img
          src="https://cdn.express24.uz/i/567/385/AUGq9BpDdV_4l0VKKqsFY.jpg"
          alt="img"
        />
      </Content>
      <Content>
        <img
          src="https://cdn.express24.uz/i/567/385/GLa-sLmL5ZLixwP8gLQrH.jpg"
          alt="img"
        />
      </Content>
      <Content>
        <img
          src="https://cdn.express24.uz/i/567/385/aKxO7RgSvYBJOXnEpNbyv.jpg"
          alt="img"
        />
      </Content>
    </Container>
  );
};

export default Carousel;
