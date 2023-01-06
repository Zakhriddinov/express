import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

const Container = styled(Slider)`
.slick-track{
   display: flex;
   gap: 14px;
}
.slick-arrow{
   background-color: white;
   width: 36px;
   height: 36px;
   border-radius: 50%;
   box-shadow: 0 0 15px rgb(65 65 65 / 10%);
    cursor: pointer;
}
.slick-next:before, .slick-prev:before {
   font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.slick-next:before, [dir=rtl] .slick-prev:before {
    content: '>';
}
.slick-prev:before  {
    content: '<';
}
.slick-next:before, .slick-prev:before {
   color: black;
   font-size: 16px;
}
.slick-next {
   right: -14px;
}
.slick-prev {
   left: -14px;
   z-index: 19;
}


`
const Content = styled(Link)`
border-radius: 10px;
height: 121px;
width: 178px;
cursor: pointer;
outline: none;
img{
   object-fit: cover;
   width: 100%;
   border-radius: 10px;
   height: 100%;
}
`
export { Container, Content }