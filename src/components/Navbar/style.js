import styled from "styled-components";

const Container = styled.nav`
display: flex;
flex-direction: column;
`
const Main = styled.div`
display: flex;
justify-content: center;
margin-bottom: 40px;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
background-color: #fff;
height:78px;
border-bottom: 1px solid var(--colorF6);
width: 100%;
padding: 0 28px;
`
const Section = styled.div`
.logo{
   height: 50px;
}
`
const FormWrap = styled.div`
position: relative;
width: 400px;
margin-left: 65px;
`

const Input = styled.input`
display: block;
border:1px solid #d1d1d1;
outline: none;
border-radius: 12px;
padding: 16px 12px;
width: 100%;
padding-left: 36px;
font-size: 14px;
`

const Label = styled.label`
position: absolute;
top: 30%;
left: 12px;
`

const Button = styled.button`
border: none;
cursor: pointer;
border-radius: 12px;
background-color: var(--background-yellow);
transition: var(--background-yellow) .16s ease-in-out,var(--color-black) .16s ease-in-out;
padding: 8px 12px;
font-size: 14px;
position: absolute;
top: 8px;
right: 15px;
`
const MapButton = styled.button`
padding: 16px;
font-size: 16px;
font-weight: 400;
line-height: 20px;
border: none;
outline: none;
border-radius: 12px;
display: flex;
align-items: center;
margin-left: 20px;
svg{
   font-size: 20px;
   margin-right: 10px;
}
`
const Profile = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
cursor: pointer;
width: 113px;
height: 78px;
border-bottom: 1px solid var(--colorF6);
border-left: 1px solid var(--colorF6);
.user{
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
   color: #8e8e93;
   svg{
      font-size: 20px;
   }
}
`
export { Container, Main, Wrapper, Section, Input, Label, Button, FormWrap, MapButton, Profile }