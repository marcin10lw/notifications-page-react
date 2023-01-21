import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 0.9375rem;
    font-size: clamp(0.9375rem, 0.87rem + 0.29vw, 1.125rem);
    color: ${({ theme }) => theme.colors.dGrayishBlue};
    border: none;
    background-color: transparent;
    align-self: flex-end;
    cursor: pointer;
    transition: color 120ms ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const Notifications = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 0.32rem + 0.78vw, 1rem);

  h1 {
    font-size: 1.25rem;
    font-size: clamp(1.25rem, 1.16rem + 0.39vw, 1.5rem);
    margin: 0;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.vdGrayishBlue};
  }

  span {
    font-size: 0.9375rem;
    font-size: clamp(0.9375rem, 0.91rem + 0.1vw, 1rem);
    font-weight: 800;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    padding: 4px 12px;
    border-radius: 6px;
  }
`;
