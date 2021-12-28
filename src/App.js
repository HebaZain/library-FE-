import AddForm from "./AdminPages/AddForm";
import Admin_Dash from "./AdminPages/Dashboard";
import { BrowserRouter , Route , Switch } from "react-router-dom";
import Home from "./HomePage/Home";
import DisplayBooks from "./AdminPages/DisplayBooks";
import EditForm from "./AdminPages/EditBook";
// import { useParams } from "react-router-dom";

//npm i react-router-dom
//npm i react-icons
//npm i react-bootstrap
//add in index.html <bootstrap link>

function App() {
  // const {ID} = useParams();
  
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App">
     {/*  const {ID} =useParams(); */}

      {/* <Home /> 
      <Admin_Dash />
      <AddForm /> 
      <DisplayBooks />
      
 */}
        {/* <EditForm />  */}
      {/* <DisplayBooks /> */}
      {/*  <Home />  */}
      {/* <Switch>
          <Route  exact path='/'>  <Home /> </Route> 
          <Route path='/Admin'> <Admin_Dash /> </Route>
          <Route path='/logout'> <Home /> </Route> 
          <Route path='/addBooks'> <AddForm /> </Route>
          <Route path='/displayBooks'> <DisplayBooks /> </Route>
          <Route path='/Editbook/:ID'><EditForm /> </Route>
        </Switch> */}
     

        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/Admin'  component={Admin_Dash} />
          <Route path='/logout'  component={ Home} /> 
          <Route path='/addBooks'  component={AddForm}  />
          <Route path='/displayBooks'  component={DisplayBooks}/>
          <Route path='/Editbook/:ID'  component={EditForm}/>
        </Switch>    
         
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
