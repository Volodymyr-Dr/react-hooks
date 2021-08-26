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
 
  const getGender = () => {
    if (document.getElementById("male").checked) {
      setContact(contact.filter(item => item.gender === "https://image.flaticon.com/icons/png/512/1340/1340619.png"));
    }
    if (document.getElementById("female").checked) {
      setContact(contact.filter(item => item.gender === "https://image.flaticon.com/icons/png/512/766/766514.png"));
    }
    if (document.getElementById("undefined").checked) {
      setContact(contact.filter(item => item.gender === "http://pngimg.com/uploads/question_mark/question_mark_PNG91.png"));
    }
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

       <>Male<input type="checkbox" id="male" onChange={getGender}/></>
       <>Female<input type="checkbox" id="female" onChange={getGender}/></>
       <>Undefined<input type="checkbox" id="undefined" onChange={getGender}/></>
       
       <ul>
            {contact.map(item => <Contact key={item.id} {...item} />)}
        </ul>
    </div>
  );
}

export default App;
