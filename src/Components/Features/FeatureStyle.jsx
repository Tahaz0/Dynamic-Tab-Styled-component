import styled from 'styled-components';



export const FeatureCard = styled.div`
   margin-top: 35px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
`;

export const CardBox = styled.div`
   
   border: 1px solid #e3e1e1;
   padding: 20px;
   img {
      width: 60px;
      height: 55px;
      padding-bottom: 12px;
    }
    div {
      padding-bottom: 3px;
      padding-right: 10px;

      h3 {
        color: #008CCB;
        padding-bottom: 8px;
      }
   }
`;