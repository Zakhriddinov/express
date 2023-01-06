import styled from "styled-components";

const Container = styled.div`
max-width: 357px;
width: 100%;
height: 316px;
border-radius: 16px;
box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
cursor: pointer;
.img{
   position: relative;
}
img{
   object-fit: cover;
   width: 100%;
   height: 204px;
   border-top-left-radius: 16px;
   border-top-right-radius: 16px;
}
.heart{
   box-shadow: 0 0 15px rgb(65 65 65 / 10%);
   position: absolute;
   width: 45px;
   height: 45px;
   cursor: pointer;
   background-color: white;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   right: 30px;
   bottom: -15px;
   svg{
      font-size: 20px;
   }
}
.info{
   display: flex;
   flex-direction: column;
   padding: 15px;
   p{
      color: #7b7b76;
      margin-top: 4px;
      font-size: 15px;
   }
   .info_rating{
      display: flex;
      gap: 10px;
      margin-top: 10px;
      .button{
         border-radius: 16px;
         cursor: pointer;
         display: flex;
         align-items: center;
         font-size: 13px;
         background-color: #f6f6fb;
         padding: 6px 10px;
         color: #1a1a18;
         svg{
            margin-right: 6px;
         }
      }
   }
}
`

export { Container }