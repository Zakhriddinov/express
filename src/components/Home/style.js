import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
max-width: 1144px;
width: 100%;
margin: 0 auto;
`
const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
Header.Link = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: #8e8e93;
text-decoration: none;
margin: 56px 0 24px 0;
svg{
   font-size: 20px;
}
`
export { Container, Header }