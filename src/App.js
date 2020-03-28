import React, {useReducer, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const  Header = lazy(()=> import('./components/Header'));
const Test = lazy(()=> import('./components/Test'));
const TestResult = lazy(()=> import('./components/TestResult'));



export const GlobalContext = React.createContext();


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
  
  const handleYesBtn =(score) => {
    navigator.vibrate(200);
    dispatch({
      type: 'YES_BTN',
      payload: score
    })
  
  }
  
  const handleNoBtn = ()=> {
    navigator.vibrate(200);
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
          <Suspense fallback={<div className="spinner"><h3>Loading...</h3></div>} >
          <Route path="/" exact component={Header} />
          <Route path="/test" exact component={Test}/>
          <Route path='/result' exact component={TestResult} />
          </Suspense>
        </Switch>
      </Router>
      </GlobalContext.Provider>
    </div>
    
  );
}

export default App;
