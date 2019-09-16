import React from 'react';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ListScreen from './screens/ListScreen';

import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {verifyCredentials} from "./config/redux-token-auth-config"
import {BrowserRouter as Router,Route} from "react-router-dom"


const store = createStore(reducer,applyMiddleware(thunk))
verifyCredentials(store)


const AppNavigator = () =>(
  <Router>
    <div>
      <Route exact path="/" component = {LoginScreen}/>
      <Route path="/signup" component = {SignupScreen}/>
      <Route path="/home" component = {ListScreen}/>
      
    </div>
  </Router>
)

class App extends React.Component {
  
  render() {
    return (
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;

