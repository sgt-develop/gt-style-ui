import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Button  from './components/button/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="black" background="red">Hello World</Button>
        <Button variant="outlined" color="green" background="blue">Hello World</Button>
        <Button>Hello World</Button>
      </header>
    </div>
  );
}

export default App;
