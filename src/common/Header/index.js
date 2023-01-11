import { StyledHeader, Notifications } from "./styled";

const Header = () => (
  <StyledHeader>
    <Notifications>
      <h2>Notifications</h2>
      <span>3</span>
    </Notifications>
    <button>Mark all as read</button>
  </StyledHeader>
);

export default Header;