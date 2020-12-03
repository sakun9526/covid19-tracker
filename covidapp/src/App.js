import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import CountryInformation from './Components/CountryInformation'

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <div className="App">
          <Route exact path="/"> <HomeComponent/> </Route>
          <Route path='/:countryname' render={(props) => <CountryInformation{...props}/>}/>
        </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
