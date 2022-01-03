import React , {Component} from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
/* import { Modal } from 'antd';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button"; */
//import 'antd/dist/antd.css';
import{FormWithConstraints, FieldFeedbacks, FieldFeedback} from 'react-form-with-constraints'
import './AddForm.css';
class AddForm extends Component{
    constructor(){
        super()
        this.state={

                    Id : null,
                    Title: null,
                    Publisher: null,
                    Category: null,
                    year: null,
                   /*  open:"true" */
                     /* setIsModalVisible:"true",  */
        };
    }
     /* handleToClose = () => {
        this.setState({
            open:"false"
        })
      }; */
   /*  showModal = () => {
        this.setState({
            setIsModalVisible:"true"
        })
        
      }; */
     
   /*  handleOk = () => {
        this.setState({
            setIsModalVisible:"false"
        })
      };
    
    handleCancel = () => {
        this.setState({
            setIsModalVisible:"false"
        })
      }; */ 
      showModal = () =>{
          /* return(
            <Dialog open={this.state.open} onClose={this.handleToClose}>
            <DialogTitle>{"Add Book?"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Book Added!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleToClose} 
                      color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
          ) */ 
           
                            
                    

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
          /*    {this.showModal()} */
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
            <div className="Add-Container">
                <h2>ADD NEW BOOK</h2>
               {/*  <Modal title="Basic Modal" 
                            visible={this.state.setIsModalVisible}
                            onOk={this.handleOk} 
                            onCancel={this.handleCancel}>
                                <p>Book added!</p>
                </Modal>    */}        
                <FormWithConstraints className="add-form"  onSubmit={this.handleClick} method="post" action="addBook">
                    <div className="id">
                        <label >Book ID:</label><br></br>
                        <input className="input-add" 
                        type='text'  
                        id="id"
                        name="id"
                        placeholder='input book id' 
                        value={this.state.Id}
                        required onChange={this.handleChangeID} />
                        <FieldFeedbacks for="id">
                        <FieldFeedback when="valueMissing"></FieldFeedback>
                        </FieldFeedbacks>
                    </div> 

                    <div className="title">
                        <label >Title:</label><br></br>
                        <input  className="input-add" 
                        type='text' 
                        id="title" 
                        name="title"
                        placeholder='input book title' 
                        value={this.state.Title}
                        required onChange={this.handleChangeTitle}
                        />
                        <FieldFeedbacks for="title">
                        <FieldFeedback when="valueMissing"></FieldFeedback>
                        </FieldFeedbacks>
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
                        <label className="ca-align">Category:</label><br></br>
                        <input  className="input-add" 
                        type='text' 
                        id="category"
                        placeholder='input category'
                        value={this.state.Category}
                        required onChange={this.handleChangeCa}
                        />
                    </div>

                    <div className="price">
                        <label>Year:</label><br></br>
                        <input  className="input-add" 
                        type='text' 
                        id="price" 
                        placeholder='input price' 
                        value={this.state.year}
                        required onChange={this.handleChangePr} 
                        />
                        {/* <FieldFeedbacks for="price">
                        <FieldFeedback when="valueMissing"></FieldFeedback>
                        </FieldFeedbacks> */}
                    </div>  
                    
                    <button className="addBook">ADD</button>
                </FormWithConstraints>
            </div>
            <div className="justifay-btn"> 
                    <Link to="/displayBooks"><button className="navigate-display-page">
                         Go To Display Books Page <FaArrowCircleRight size={20} />
                    </button>
                    </Link>
                </div>
        </div>
        )
    }
}
export default AddForm;