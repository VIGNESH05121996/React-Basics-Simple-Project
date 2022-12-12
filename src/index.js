import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloWorld from './components/hello-world/helloWorld';
import Counter from './components/counter/counter';
import TemperatureControl from './components/temperature control/temperatureControl';
import SearchFilter from './components/search-filter/searchFilter';
import Registration from './components/registration-form/registration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HelloWorld />
    <Counter />
    <TemperatureControl />
    <SearchFilter /> */}
    <Registration />
  </React.StrictMode>
);
