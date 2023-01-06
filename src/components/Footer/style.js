import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const common = css`
text-decoration: none;
font-family: sans-serif;
font-weight: 400;
font-size: 14px;
color: #8e8e93;
`

const Container = styled.footer`
background-color: #f6f6f6;
padding: 40px 196px;
display: flex;
justify-content: space-between;

span{
   ${common}
   font-size: 16px;
}
align-items: flex-end;
.link{
   display: flex;
   align-items: center;
   gap: 15px;
   a{
      color: var(--text-black);
      font-size: 18px;
   }
}
`
const Content = styled.div`
display: flex;
flex-direction: column;
`
Content.List = styled.div`
display: flex;
align-items: center;
gap: 32px;
margin-bottom: 49px;
`
Content.Item = styled(Link)`
${common}
font-size: 14px;
`
export { Container, Content }