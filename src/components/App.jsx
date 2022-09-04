import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { Form } from "./Form/Form";
import Filter from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { Register } from 'pages/registerPage';
import { Login } from 'pages/loginPage';
import { Navigation } from './Navigation/navigation';
import { PrivatRoute } from './PrivatRoure';
import { PublicRoute } from './PublicRouts';
import { FirstList } from './FirstList/firstList';
import { Toaster } from 'react-hot-toast';




export function App() {

  const [filter, setFilter] = useState('');

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<FirstList />} />
        <Route path='/' element={<PublicRoute />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route path='/' element={<PrivatRoute />}>
          <Route path='/contacts' element={
            <div>
              <h1>Phonebook</h1>
              <Form />
              <Toaster
                position="top-center"
                reverseOrder={false}
              />
              <h2>Contacts</h2>
              <Filter setFilter={setFilter} />
              <ContactList filter={filter} />
            </div>
          } />
        </Route>

      </Route>
    </Routes>
  );
};

