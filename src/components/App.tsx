import React, { useState } from 'react';
import './App.scss';

interface AppProps {
  message: string;
}

const App = ({ message }: AppProps) => {
  const [rendered, setRendered] = useState(false);

  return (
    <div className="container">
      <h1>{message}</h1>
    </div>
  );
};

export default App;
