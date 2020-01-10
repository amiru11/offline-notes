import styled from "styled-components";

export const ItemBlock = styled.div`
  display: flex;

  & + & {
    margin-top: 3rem;
  }
`;

export const ItemContents = styled.div`
  h2 {
    margin: 0;
    a {
      color: #000000;

      &:hover {
        color: #ff9999;
      }
    }
  }
  p {
    margin: 0;
    line-height: 1.5;
    margin-top: 0.5rem;
    white-space: normal;
  }
`;
