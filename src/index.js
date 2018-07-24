import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/reducer.js'


// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './css/index.css';
// import { dark } from './css/darktheme.js';

import App from './App';


  const store = createStore(reducer, compose(applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
   ));

   console.log('Redux store => ',store.getState());
  //  <MuiThemeProvider muiTheme={ getMuiTheme(dark) }>
  // </MuiThemeProvider>,
ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
