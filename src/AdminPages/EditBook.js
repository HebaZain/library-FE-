import React , {Component} from "react";
import {withRouter} from 'react-router';

import './EditBook.css';
class EditForm extends Component{
    constructor(props){
        super(props)
    }
    state={
        /* books:{} */
                ID : null,
                title: null,
                publisher: null,
                category: null,
                year: null
    }; 
    async componentDidMount() {
        // let name = jwt.decode(token);
       /*  console.log("%%%%%%")
        console.log(this.props)
        console.log(this.props.location.param1)
        console.log(this.props.match.params) */
        console.log("============")
        console.log(this.props)

 
         let response= await fetch(
             "http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/EditBookServlet?ID=" + this.props.match.params.ID,{
             method:"GET",
             headers : { 
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
                },
         })
         console.log("kkkk" + response)
         const setBooks = await response.json();
         if(response.ok){
         this.setState({
            ID:setBooks.ID,
            title:setBooks.title,
            publisher:setBooks.publisher,
            category: setBooks.category,
            year: setBooks.year
         })
        }
         document.body.style.backgroundImage="none";
         document.body.style.backgroundColor="navajowhite";
     }

  
    handleChangeID =(e) => {
        this.setState({
            ID: e.target.value,
        })   
    }
    handleChangeTitle =(e) => {
        this.setState({
            title: e.target.value,
        })   
    }
    handleChangePub =(e) => {
        this.setState({
            publisher: e.target.value,
        })   
    }
    handleChangeCa =(e) => {
        this.setState({
            category: e.target.value,
        })   
    }
    handleChangePr =(e) => {
        this.setState({
            year: e.target.value,
        })   
    }
     handleSubmit = async(e) => {
        e.preventDefault()
        let resSubmit = await fetch(" http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/EditDetailsServlet",{
            method:"post",
            body:JSON.stringify({ 
                ID: this.state.ID,
                title: this.state.title,
                publisher: this.state.publisher,
                category: this.state.category,
                year: this.state.year
            }) 
        })
        let req={  ID: this.state.ID,
            title: this.state.title,
            publisher: this.state.publisher,
            category: this.state.category,
            year: this.state.year
        }
        if(resSubmit.ok){
            alert("Updated");
        }else{
            alert("Not updated");
        }
            console.log(req);
            console.log(JSON.stringify(req));
        console.log(resSubmit);
    } 
    
    render(){
        //console.log("========")
        return(
            <div className="edit-Container">
                <h2>EDIT BOOK DATA</h2>
                <form className="edit-form"    onSubmit={this.handleSubmit}    >
                    <div className="id">
                        <label >Book ID:</label><br></br>
                        <input className="input-edit" 
                        type='text'  
                        id="id"
                        name="id"
                        placeholder='input book id'
                        defaultValue={this.state.ID} 
                        onChange={this.handleChangeID}  />
                    </div> 

                    <div className="title">
                        <label >Title:</label><br></br>
                        <input  className="input-edit" 
                        type='text' 
                        id="title" 
                        name="title"
                        placeholder='input book title' 
                        defaultValue={this.state.title}
                        onChange={this.handleChangeTitle} 
                        />
                    </div>

                    <div className="publisher">
                        <label >Publisher:</label><br></br>
                        <input  className="input-edit" 
                        type='text' 
                        id="publisher" 
                        placeholder='input publisher name'
                        defaultValue={this.state.publisher}
                        onChange={this.handleChangePub}
                        />
                    </div>

                    <div className="category">
                        <label>Category:</label><br></br>
                        <input  className="input-edit" 
                        type='text' id="category"
                        placeholder='input category'
                        defaultValue={this.state.category} 
                        onChange={this.handleChangeCa} 
                        />
                    </div>

                    <div className="price">
                        <label>Year:</label><br></br>
                        <input  className="input-edit" 
                        type='text' 
                        id="price" 
                        placeholder='input price' 
                        defaultValue={this.state.year} 
                        onChange={this.handleChangePr}  
                        />
                    </div>  
                    
                    <button className="submit-edit">SUBMIT</button>
                </form>
            </div>
        )
    }
}
export default withRouter(EditForm);