import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.telephone,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: '', telephone: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(3, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        telephone: Yup.string()
          .matches(/^[+]?[-0-9\s]{7,15}$/, 'Must be a valid telephone!')
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={css.field}
          type="text"
          name="username"
          id={nameFieldId}
        />
        <ErrorMessage name="username" component="div" />

        <label htmlFor={telFieldId}>Number</label>
        <Field
          className={css.field}
          type="tel"
          name="telephone"
          id={telFieldId}
        />
        <ErrorMessage name="telephone" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
