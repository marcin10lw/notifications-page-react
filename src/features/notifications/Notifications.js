import { useState } from "react";
import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import { Main } from "../../common/Main/styled";
import Notification from "./Notification";
import { notificationsData } from "../../notificationsData";

function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData);

  return (
    <Container>
      <Header />
      <Main>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            picture={notification.picture}
            name={notification.name}
            operation={notification.operation}
            linked={notification.linked}
            linkedPhoto={notification.linkedPhoto}
            message={notification.message}
            date={notification.date}
            read={notification.read}
          />
        ))}
      </Main>
    </Container>
  );
}

export default Notifications;
