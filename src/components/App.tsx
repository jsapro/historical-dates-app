import React, { useState } from 'react';

interface AppProps {
  message: string;
}

const App = ({ message }: AppProps) => {
  const [rendered, setRendered] = useState(false);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;

