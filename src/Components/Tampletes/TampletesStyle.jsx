import styled from "styled-components";


export const SectionTop = styled.div`
   margin: 0 auto;
   text-align: center;
`;


export const TabButtons = styled.div`
   
   display: flex;
   gap: 2rem;
   justify-content: center;
`;

export const Button2 = styled.button`
  padding: 15px 24px;
  border: none;
  font-size: 17px;
  background-color: white;
  transition: all .5s;
  border-radius: 6px;
  cursor: pointer;
  color: #737373;
  box-shadow: 5px 5px 10px solid rgba(0, 0, 0, .302);
  .active {
    background-color: #008CCB;
    color: white;
  }
  &:hover {
    background-color: #008CCB;
    color: white;
  }
`;



export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-top: 45px;
  transition: all 3s;
  padding-bottom: 55px;
`;

export const Box = styled.div`
  height: 93vh;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  border: 5px solid white;
  position: relative;
  /* background-size: cover;
  background-repeat: no-repeat;
  transform: translateY(0); */
  object-position: top;
  transition: 12s;
  &:hover {
    object-position: bottom;
  }
`;

export const BoxContent = styled.div`
   position: absolute;
   left: 0;
   bottom: 0;
   background-color: white;
   text-align: center;
   width: 100%;
   padding: 25px 0;
   h2 {
    color: #008CCB;
    padding-bottom: 7px;
   }
   p {
    color: #828282;
   }
`;
