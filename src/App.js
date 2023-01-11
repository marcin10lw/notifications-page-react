import { useState } from "react";
import { Container } from "./Container/styled";
import Header from "./Header";
import { Main } from "./Main/styled";
import Notification from "./Notification";
import { notificationsData } from "./notificationsData";

function App() {
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

export default App;
