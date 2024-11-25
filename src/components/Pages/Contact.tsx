import React from 'react';
import { Link } from 'react-router-dom';
// Define a TypeScript interface for contact information
interface Contact {
  id: number;
  name: string;
  phone: string;
}
// Sample data: List of contacts
const contact: Contact[] = [
  { id: 1, name: 'John Doe', phone: '123-456-7890' },
  { id: 2, name: 'Jane Doe', phone: '098-765-4321' },
  // Add more contacts as needed
];
// ContactsPage component
const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contacts</h1>
      <ul>
        {contact.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};
<Link to="/Contact">Contact</Link>
export default Contact;
