import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Global from './pagesdatacovid/Global';
import Indo from './pagesdatacovid/Indo';
import Provinsi from './pagesdatacovid/Provinsi';


const App = () => {

   return(

  <BrowserRouter>
   <div>
    <nav>
       <ul>
          <li>
             <Link to="/Global">Global Data</Link>
          </li>

          <li>
             <Link to="/Indo">Indo Data</Link>
          </li>
          
          <li>
             <Link to="/Global">Provinsi Data</Link>
          </li>
          
       </ul>
    </nav>

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
      </div>
  </BrowserRouter>

   )
}


export default App;
