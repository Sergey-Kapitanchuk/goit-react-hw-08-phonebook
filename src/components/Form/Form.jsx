import { useState } from "react";
import CSS from "./Form.module.css"
import { useAddContactsMutation, useFetchContactsQuery, } from "redux/contactsApi";
import { toast } from "react-hot-toast";



export function Form() {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactsMutation();

  const nameInputChange = e => {
    const { value, name } = e.currentTarget;
    name === 'contactName'
      ? setContactName(value)
      : setContactNumber(value);
  };

  const contactSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === contactName.toLowerCase(),
      )
    ) {
      toast.error(`$contactName} is already in contacts!`);
      return;
    }

    addContact({ name: contactName, phone: contactNumber });
    toast.success(`${contactName} was added to your contacts!`);

    setContactName('');
    setContactNumber('');
  };

  return (
    <>
      <form onSubmit={contactSubmit} className={CSS.form}>
        <label className={CSS.formInput}>
          Name
          <input
            type="text"
            name="contactName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={contactName}
            onChange={nameInputChange}
            required
          />
        </label>

        <label htmlFor="contactId" className={CSS.formInput}>
          Number
          <input
            type="tel"
            name="contactNumber"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={contactNumber}
            onChange={nameInputChange}
            required
          />
        </label>

        <button type="submit" className={CSS.buttonForm}>Add contact</button>


      </form>
    </>
  )
};
