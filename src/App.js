import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Contacts from "./components/Contacts";
import AddNewContact from "./components/AddNewContact";
import EditContact from "./components/EditContact";
import Pagenotfound from "./Pagenotfound";

const App =()=> {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Contacts />
          </Route>
         <Route path="/add">
            <AddNewContact />
          </Route>
          <Route path="/contacts/edit/:id">
            <EditContact />
          </Route>
          <Route path="*">
            <Pagenotfound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

//clone from gitHub
//npm install
//npm start:dev 

// External packages used
//react-router-dom : routing 
//axios : fetch the data ...create,delete,and update 
//json-server : storing data as json file
//concurrently : to run two terminal i.e npm start and --watch json file

//React Hooks used
// useState 
// useEffect 
// useParam 
// useHistory