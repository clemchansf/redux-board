import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducers} from './reducers'


let initialState = {
  todolist: [{
    title: "Sleep",
    bgColor: "#000",
    items: [
      "heavy eyelids", "body relax", "sleep deprived", "REM"
    ]
  },
  {
    title: "Meditate",
    bgColor: "#000",
    items: [
      "calm down", "take deep breathes", "counting inhale/exhale - do repeat every six hours, ten times each set", "enjoy the tranquility"
    ]
  },
  {
    title: "Work",
    bgColor: "#000",
    items: [
      "practice short exerises with my tools", "read more online articles", "build REST API using MERN stack"
    ]
  },
  {
    title: "Eat",
    bgColor: "#000",
    items: [
      "Breakfast with Coffee",
      "Veggie Lunch with green Tea",
      "High tea with bread or biscuits",
      "Evening warm drink and light snacks"
    ]
  }]
}


let store = createStore(reducers, initialState)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
