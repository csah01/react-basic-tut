import { useState } from 'react';
import Accordion from './Accordion';
import Profile from './Profile';

function App() {
  const [openAccorianId, setOpenAccordionId] = useState(null);
  const handleAccordionClick = (id) => {
    setOpenAccordionId((prevValue) => {
      return prevValue === id ? null : id;
    });
  }
  return (
    <div className="App">
      <Accordion 
        id="my-profile" 
        labelText="My Profile" 
        open={openAccorianId === 'my-profile'}
        onClick={handleAccordionClick}
        >
        <Profile />
      </Accordion>
      <Accordion 
        id="my-hubbies" 
        labelText="My Hubbies" 
        open={openAccorianId === 'my-hubbies'}
        onClick={handleAccordionClick}
        >
        new hardcoded string
      </Accordion>
    </div>
  );
}

export default App;
