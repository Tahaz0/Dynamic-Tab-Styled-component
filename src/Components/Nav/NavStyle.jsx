
import styled from 'styled-components';


export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const List = styled.ul`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: .5rem;
 list-style: none;
`;
export const Link = styled.a`
 text-decoration: none;
 padding: 12px 18px;
 border-radius: 6px;
 color: ${({ c }) => c ? c : ' #909090'};
 background-color: ${({ bg }) => bg};
 transition: all .5s ease;
 &:hover {
    color: #008CCB;
 }
`;
