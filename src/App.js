import AddForm from "./AdminPages/AddForm";
import Admin_Dash from "./AdminPages/Dashboard";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import DisplayBooks from "./AdminPages/DisplayBooks";

//npm i react-router-dom
//npm i react-icons
//npm i react-bootstrap
//add in index.html <bootstrap link>

function App() {
  return (
    <div className="App">

  <BrowserRouter>
      <div className="App">
      {/* <Home /> 
      <Admin_Dash />
      <AddForm /> 
      <DisplayBooks />
 */}
       <DisplayBooks />
      {/*  <Routes>
          <Route path='/' exact element={ <Home />} />
          <Route path='/Admin' exact element={<Admin_Dash />} />
          <Route path='/logout' exact element={<Home />} /> 
          <Route path='/addBooks' exact element={<AddForm />}  />
          <Route path='/displayBooks' exact element={<DisplayBooks />} />
        </Routes>   */}
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
