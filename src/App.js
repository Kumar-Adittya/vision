import React from 'react';
import './App.css';   
import 'normalize.css';
import {Provider} from 'react-redux';
import store from './store'
import BodyComponent from './components/BodyComponent/BodyComponent'; 
function App() {
  return (
    <Provider store={store}>
    <div className="App"> 
       <BodyComponent/> 
    </div>
    </Provider>
  );
}

export default App; 