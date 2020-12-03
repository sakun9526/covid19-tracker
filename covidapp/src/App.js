import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Route exact path="/"> <HomeComponent/> </Route>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
