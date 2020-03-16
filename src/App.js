import React from 'react';
import logo from './logo.svg';
import './App.css';
var style = {
  backgroundColor: 'black',
  color: '#595959',
  width: '100%'
}
var personMobile = ['010000', '020000','030000']
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style= {style}>Hello World</h1>
      <Person2 name="Edward" surname="Colleen" mobilepersonMobile[2]></Person2>
      <Person2 name="Ero" surname= "Deik"></Person2>
      <Person2 name="Juba" surname= "Rubi"></Person2>
     

      </header>
    </div>
  );
}
function Person2(props) {
  const  personStyle= {
    border:"2px solid #330000",
    width: '30%', 
    backgroundColor: '#1a0000',
    color: '#990000',
    marginBottom: '15px',
    float: 'right'
  }
  return (
    <div style={personStyle}>
      <h3>{props.name}</h3>
       <p>The different surname is: {props.surname} </p>
       <p>User Mobile Number: {props.mobile}</p>
    </div>
  )
}

export default App;
