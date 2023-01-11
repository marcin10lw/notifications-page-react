import {
  Section,
  Picture,
  Name,
  Info,
  LinkedPhoto,
  Operation,
  Linked,
  Date,
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
    <Section>
      <Picture src={picture} />
      <div>
        <Info>
          <Name>{name}</Name>
          {operation && <Operation>{operation}</Operation>}
          {linked && <Linked>{linked}</Linked>}
        </Info>
        <Date>{date}</Date>
      </div>
      {linkedPhoto && <LinkedPhoto src={linkedPhoto} />}
    </Section>
  );
};

export default Notification;
