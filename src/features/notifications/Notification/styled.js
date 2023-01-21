import styled from "styled-components";

export const StyledNotification = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  font-size: 0.9375rem;
  font-size: clamp(0.9375rem, 0.91rem + 0.1vw, 1rem);
`;

export const Picture = styled.img`
  max-width: clamp(2.5rem, 2.39rem + 0.49vw, 2.8125rem);
  max-height: 45px;
  object-fit: cover;
  cursor: pointer;
`;

export const Name = styled.a`
  font-weight: 800;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.vdGrayishBlue};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Info = styled.div``;

export const Operation = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.dGrayishBlue};
`;

export const Linked = styled.a`
  margin-left: 8px;
  font-weight: 800;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dGrayishBlue};
  cursor: pointer;
  transition: color 120ms ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const MyGroup = styled.span`
  margin-left: 8px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Date = styled.div`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;

export const Message = styled.div`
  color: ${({ theme }) => theme.colors.dGrayishBlue};
  line-height: 1.3;
  border: 1px solid ${({ theme }) => theme.colors.lGrayishBlue2};
  border-radius: 4px;
  padding: 20px;
  margin-top: 20px;
  transition: background-color 120ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lGrayishBlue1};
    border: 1px solid ${({ theme }) => theme.colors.lGrayishBlue1};
  }
`;

export const LinkedPhoto = styled.a`
  margin-left: auto;
  max-width: 45px;
  max-height: 45px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Dot = styled.div`
  margin-left: 5px;
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red};
`;
