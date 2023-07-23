import Contact from "../Contact/Contact";
import { displayedContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(displayedContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
