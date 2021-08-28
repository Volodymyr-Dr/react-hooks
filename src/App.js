import React, {useState, useEffect} from 'react';

import contacts from './Components/ContactsList'
import Contact from './Components/Contact'

import './App.css';


function App() {
  const [contact,  setContact] = useState(contacts);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function cheking (e) {
      return e.toLowerCase().includes(searchTerm.toLowerCase())
    }
    const name = contacts.filter(person =>
      cheking(person.lastName) || cheking(person.firstName) || cheking(person.phone));

    setContact(name)
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  };
 
    return (
    <div className="App">
      <h1>Contacts</h1>
       <div>
         <input 
            type="text"  
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
       </div>
       <ul>
            {contact.map(item => <Contact key={item.id} {...item} />)}
        </ul>
    </div>
  );
}

export default App;
