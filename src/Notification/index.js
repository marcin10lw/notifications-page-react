import { Section } from "./styled";

const Notification = ({ picture, name, operation, linked }) => {
  return (
    <Section>
      <img src={picture} />
      <div>
        <span>{name}</span>
        <span>{operation}</span>
        <span>{linked}</span>
      </div>
    </Section>
  );
};

export default Notification;