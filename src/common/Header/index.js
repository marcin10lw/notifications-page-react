import { useDispatch, useSelector } from "react-redux";
import { StyledHeader, Notifications } from "./styled";
import {
  markAllAsRead,
  selectNotifications,
} from "../../features/notifications/notificationSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector(selectNotifications);
  const unread = notifications.filter((notification) => !notification.read);

  return (
    <StyledHeader>
      <Notifications>
        <h1>Notifications</h1>
        <span>{unread.length}</span>
      </Notifications>
      <button onClick={() => dispatch(markAllAsRead())}>
        Mark all as read
      </button>
    </StyledHeader>
  );
};

export default Header;
