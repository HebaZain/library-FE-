import React , {Component} from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './AddForm.css';
class AddForm extends Component{
    constructor(){
        super()
        this.state={

                    Id : null,
                    Title: null,
                    Publisher: null,
                    Category: null,
                    year: null
        };
    }
    handleChangeID =(e) => {
        this.setState({
            Id: e.target.value,
        })   
    }
    handleChangeTitle =(e) => {
        this.setState({
            Title: e.target.value,
        })   
    }
    handleChangePub =(e) => {
        this.setState({
            Publisher: e.target.value,
        })   
    }
    handleChangeCa =(e) => {
        this.setState({
            Category: e.target.value,
        })   
    }
    handleChangePr =(e) => {
        this.setState({
            year: e.target.value,
        })   
    }
  
     handleClick = async (e) => {
         e.preventDefault()
        let response= await fetch('http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/addBookServlet',{
           // 'http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/addBookServlet',{
           // http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/addBookServlet?Id=3&title=Book3&publisher=Pub3&category=Cat3&price=19
            method :'post',
             body: JSON.stringify({
                ID : this.state.Id,
                title: this.state.Title,
                publisher: this.state.Publisher,
                category: this.state.Category,
                year: this.state.year
             }) 
        }) 
         let req={  ID : this.state.Id,
            title: this.state.Title,
            publisher: this.state.Publisher,
            category: this.state.Category,
            year: this.state.year}
            console.log(req);
            console.log(JSON.stringify(req));

         console.log(response);
         if(response.ok){
             alert("Book added")
         }else{
             alert("Not added")
         }
    } 
    componentDidMount() {
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite";
    }
    
    render(){
        //console.log("========")
        return(
            <div>
                <div className="justifay-btn"> 
                    <Link to="/displayBooks"><button className="navigate-display-page">
                         Go To Display Books Page <FaArrowCircleRight size={20} />
                    </button>
                    </Link>
                </div>
            <div className="Add-Container">
                <h2>ADD NEW BOOK</h2>
                <form className="add-form"  onSubmit={this.handleClick} method="post" action="addBook">
                    <div className="id">
                        <label >Book ID:</label><br></br>
                        <input className="input-add" 
                        type='text'  
                        id="id"
                        name="id"
                        placeholder='input book id' 
                        value={this.state.Id}
                        onChange={this.handleChangeID} />
                    </div> 

                    <div className="title">
                        <label >Title:</label><br></br>
                        <input  className="input-add" 
                        type='text' 
                        id="title" 
                        name="title"
                        placeholder='input book title' 
                        value={this.state.Title}
                        onChange={this.handleChangeTitle}
                        />
                    </div>

                    <div className="publisher">
                        <label >Publisher:</label><br></br>
                        <input  className="input-add" 
                        type='text' 
                        id="publisher" 
                        placeholder='input publisher name'
                        value={this.state.Publisher} 
                        onChange={this.handleChangePub}
                        />
                    </div>

                    <div className="category">
                        <label>Category:</label><br></br>
                        <input  className="input-add" 
                        type='text' 
                        id="category"
                        placeholder='input category'
                        value={this.state.Category}
                        onChange={this.handleChangeCa}
                        />
                    </div>

                    <div className="price">
                        <label>Year:</label><br></br>
                        <input  className="input-add" 
                        type='text' 
                        id="price" 
                        placeholder='input price' 
                        value={this.state.year}
                        onChange={this.handleChangePr} 
                        />
                    </div>  
                    
                    <button className="addBook">ADD</button>
                </form>
            </div>
        </div>
        )
    }
}
export default AddForm;