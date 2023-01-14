import {
  StyledNotification,
  Picture,
  Name,
  Info,
  LinkedPhoto,
  Operation,
  Linked,
  Date,
  Message,
  Dot,
} from "./styled";

const Notification = ({
  picture,
  name,
  operation,
  linked,
  linkedPhoto,
  date,
  message,
  read,
}) => {
  return (
    <StyledNotification>
      <Picture src={picture} alt="profile" />
      <div>
        <Info>
          <Name href="#">{name}</Name>
          {operation && <Operation>{operation}</Operation>}
          {linked && <Linked href="#">{linked}</Linked>}
          {!read && <Dot />}
        </Info>
        <Date>{date}</Date>
        {message && <Message>{message}</Message>}
      </div>
      {linkedPhoto && (
        <LinkedPhoto href="#" aria-label="Go to thread">
          <img src={linkedPhoto} alt="thread photo" />
        </LinkedPhoto>
      )}
    </StyledNotification>
  );
};

export default Notification;
