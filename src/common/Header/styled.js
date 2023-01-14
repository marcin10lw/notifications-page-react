import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 18px;
    color: ${({theme}) => theme.colors.dGrayishBlue};
    border: none;
    background-color: transparent;
    align-self: flex-end;
    cursor: pointer;
    transition: color 120ms ease-in;

    &:hover {
      color: ${({theme}) => theme.colors.blue};
    }
  }
`;

export const Notifications = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h1 {
    margin: 0;
    font-weight: 800;
    color: ${({theme}) => theme.colors.vdGrayishBlue};
  }
  
  span {
    font-weight: 800;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.blue};
    padding: 4px 12px;
    border-radius: 6px;
  }
`