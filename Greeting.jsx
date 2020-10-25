import React, { useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('Hello');

  const updateGreeting = () => setGreeting('Bonjour');

  return (
    <div aria-label='greeting'>
      <p>{greeting} World</p>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
};

export default Greeting;
