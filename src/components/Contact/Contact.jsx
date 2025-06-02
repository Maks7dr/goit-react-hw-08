import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};

export default Contact;
