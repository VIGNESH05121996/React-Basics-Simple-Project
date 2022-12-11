import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloWorld from './components/hello-world/helloWorld';
import Counter from './components/counter/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloWorld /> */}
    <Counter />
  </React.StrictMode>
);
