import styled from "styled-components";

const Container = styled.div`
h2{
   margin: 56px 0 20px 0;
}
`
const Wrapper = styled.div`
display: flex;
gap: 36px;
justify-content: space-between;
flex-wrap: wrap;
`
const Button = styled.button`
width: 100%;
color: #1a1a18;
cursor: pointer;
outline: none;
border: none;
background: #ececf1;
border-radius: 12px;
font-size: 16px;
font-weight: 600;
padding: 20px 0;
margin: 50px 0;
`
export { Container, Wrapper, Button }