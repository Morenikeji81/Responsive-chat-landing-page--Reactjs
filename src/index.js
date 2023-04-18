import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import Demos from './components/Demos';
import About from './components/About';
import Blog from './components/Blog';
import Pages from './components/Pages';
import ContactInfo from './components/ContactInfo'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <NavBar />
   <Demos />
   <About /> 
   <Blog />
   <Pages />
   <ContactInfo/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

