import AddForm from "./AdminPages/AddForm";
import Admin_Dash from "./AdminPages/Dashboard";
import { BrowserRouter , Route , Switch } from "react-router-dom";
import Home from "./HomePage/Home";
import DisplayBooks from "./AdminPages/DisplayBooks";
import EditForm from "./AdminPages/EditBook";
import UserBooks from "./UserPages/UserBooks";
import SearchResult from "./UserPages/SearchResult";

//npm i react-router-dom
//npm i react-icons
//npm i react-bootstrap
//add in index.html <bootstrap link>
//npm i react-form-with-constraints
//npm install @material-ui/core

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/Admin'  component={Admin_Dash} />
            <Route path='/logout'  component={ Home} /> 
            <Route path='/addBooks'  component={AddForm}  />
            <Route path='/displayBooks'  component={DisplayBooks}/>
            <Route path='/Editbook/:ID'  component={EditForm}/>
            <Route path='/User' component={UserBooks} />
            <Route path='/searchResult/:title' component={SearchResult} />
          </Switch>    
      </div>
    </BrowserRouter>
  );
}

export default App;
