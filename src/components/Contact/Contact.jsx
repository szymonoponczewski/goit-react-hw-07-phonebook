import { deleteContact } from "../../redux/operations";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import css from "./Contact.module.css";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      {contact.name}: {contact.phone}
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete contact
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
