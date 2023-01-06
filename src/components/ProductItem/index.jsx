import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { AiOutlineCar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

const ProductItem = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <div className="img">
        <img src="https://cdn.express24.uz/i/701/701/17c987e20d7.jpg" alt="" />
        <div className="heart">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="info">
        <h3>BS cafe</h3>
        <p>Европейская</p>
        <div className="info_rating">
          <div className="button">
            <AiOutlineStar />
            4.5
          </div>
          <div className="button">
            <AiOutlineCar />
            11 000 sum
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductItem;
