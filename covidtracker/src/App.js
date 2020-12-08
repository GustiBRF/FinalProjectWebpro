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
     <center>
    <nav>
    <h1> COVID 19 TRACKER </h1>
       <ul>
          <li> <Link className="underlined" to="/Global">Global</Link> </li>
          <li> <Link className="underlined" to="/Indo">Indonesia</Link> </li>
          <li>  <Link className="underlined" to="/Provinsi">Provinsi</Link></li>
       </ul>
    


          <Route path="/Global">   <Global /></Route>

         <Route path="/Indo"> <Indo /> </Route>

         <Route path="/Provinsi"><Provinsi /> </Route>
          </nav>
          </center>
      </div>
  </BrowserRouter>

   )
}


export default App;
