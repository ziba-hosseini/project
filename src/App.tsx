import React from 'react';
import Routes from "./components/src/routes/route";
import { Provider } from "react-redux";
import {store} from './core/redux/store/store';
import './assets/scss/all.scss';
import { Header } from './components/src/organisms/index';

function App() {
  return (
    <div className="app_style">
    
    <Provider store={store}>
    <Routes />

  </Provider>

  </div>
  );
}

export default App;
