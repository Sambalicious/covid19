import React, {useReducer} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { Test } from './components/Test';
import { TestResult } from './components/TestResult';
import button from '../src/utils/button-sound.mp3';












export const GlobalContext = React.createContext()

function App() {

  const initialState = {
    points : 0,
  }
  
  
  const reducer =(state, action) =>{
      
    switch (action.type) {
      case 'YES_BTN': return{
        ...state, points: state.points + action.payload
      }
  
      case 'NO_BTN': return{
        ...state
      }
      default: return state
    }
  }
  
  const handleYesBtn =(number) => {
     
    dispatch({
      type: 'YES_BTN',
      payload: number
      
    })
  
  }
  
  const handleNoBtn = ()=> {
   
    dispatch({
      type: 'NO_BTN'

      
    })
  
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);
  return(
   
    <div className="container mx-auto ">
      <GlobalContext.Provider value={{state, dispatch, handleYesBtn, handleNoBtn}}>
      <Router>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/test" exact component={Test}/>
          <Route path='/result' exact component={TestResult} />

        </Switch>
      </Router>
      </GlobalContext.Provider>
    </div>
    
  );
}

export default App;
