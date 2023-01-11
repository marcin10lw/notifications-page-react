import styled from "styled-components";
import { theme } from "../theme";

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const Picture = styled.img`
  max-width: 45px;
  max-height: 45px;
  object-fit: cover;
`;

export const Name = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.vdGrayishBlue};
`;

export const Info = styled.div``;

export const Operation = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.dGrayishBlue};
`;

export const Linked = styled.span`
  margin-left: 8px;
  font-weight: 800;
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
`;

export const LinkedPhoto = styled.img``;
