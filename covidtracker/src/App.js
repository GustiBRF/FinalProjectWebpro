import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Global from './pagesdatacovid/Global';
import Indo from './pagesdatacovid/Indo';
import Provinsi from './pagesdatacovid/Provinsi';


const App = () => {

   return(
  <BrowserRouter>

      <Switch>

        <Route path="/Global">
           <Global />
        </Route>

        <Route path="/Indo">
           <Indo />
        </Route>

        <Route path="/Provinsi">
           <Provinsi />
        </Route>

      </Switch>

  </BrowserRouter>

   )
}


export default App;
