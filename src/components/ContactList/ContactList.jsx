import React from "react";
import CSS from "./ContactList.module.css";
import { useFetchContactsQuery, useDeleteContactsMutation } from "redux/contactsApi";

export const ContactList = ({ filter }) => {

    const { data: contacts, isFetching } = useFetchContactsQuery();
    const [deleteContact] = useDeleteContactsMutation();

    const onDelete = id => {
        deleteContact(id);
    };

    const getVisibleContacts = () => {
        const normalizedFil = filter.toLocaleLowerCase()
        return contacts.filter(contact =>
            contact.name.toLocaleLowerCase().includes(normalizedFil))
    };

    return (
        <>
            {isFetching && <div>Loading...</div>}
            {
                contacts && (
                    <ul className={CSS.contact}>
                        {getVisibleContacts().map(contact =>
                            <li key={contact.id} className={CSS.contactList}><p>{contact.name}: {contact.phone}</p>
                                <button type="button" onClick={() => onDelete(contact.id)} className={CSS.contactButton}>Delete</button>
                            </li>
                        )}
                    </ul>
                )
            }
        </>
    )
};
