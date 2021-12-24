import React , {Component} from "react";
import './AddForm.css';
class AddForm extends Component{
    constructor(){
        super()
        this.state={

                    Id : null,
                    Title: null,
                    Publisher: null,
                    Category: null,
                    Price: null
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
            Price: e.target.value,
        })   
    }
  
     handleClick = async (e) => {
         e.preventDefault()
        let response= await fetch('http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/addBookServlet',{
           // 'http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/addBookServlet',{
           // http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/addBookServlet?Id=3&title=Book3&publisher=Pub3&category=Cat3&price=19
            method :'post',
             body: JSON.stringify({
                Id : this.state.Id,
                title: this.state.Title,
                publisher: this.state.Publisher,
                category: this.state.Category,
                price: this.state.Price
             }) 
        }) 
         let req={  Id : this.state.Id,
            title: this.state.Title,
            publisher: this.state.Publisher,
            category: this.state.Category,
            price: this.state.Price}
            console.log(req);
            console.log(JSON.stringify(req));

         console.log(response);
    } 
    componentDidMount() {
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite";
    }
    
    render(){
        return(
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
                        type='text' id="category"
                        placeholder='input category'
                        value={this.state.Category}
                        onChange={this.handleChangeCa}
                        />
                    </div>

                    <div className="price">
                        <label>Price:</label><br></br>
                        <input  className="input-add" 
                        type='text' 
                        id="price" 
                        placeholder='input price' 
                        value={this.state.Price}
                        onChange={this.handleChangePr} 
                        />
                    </div>  
                    
                    <button className="addBook">ADD</button>
                </form>
            </div>
        )
    }
}
export default AddForm;