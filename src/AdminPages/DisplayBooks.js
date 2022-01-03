import React , {Component}  from 'react';
import { FaBook } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import * as ReactBootStarp from 'react-bootstrap';
import { Modal, Button } from 'antd';
//import { createBrowserHistory } from "history";
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom";
import './DisplayBooks.css';

class DisplayBooks extends Component{
     constructor(){
        super()
        this.state={
            books:[],
            isLoading:"false",
            errorFound:"false",
            /* setIsModalVisible:"true", */
        }
    } 
   /*  showModal = () => {
        this.setState({
            setIsModalVisible:"true"
        })
        
      }; */
    
    /* handleOk = () => {
        this.setState({
            setIsModalVisible:"false"
        })
      };
    
    handleCancel = () => {
        this.setState({
            setIsModalVisible:"false"
        })
      }; */
  /*   async function getdata() {
            let res = await fetch("http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/DisplayBooksServlet",{
                method:"GET",
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
            })
            console.log(res.json());
            //const json_body = await res.json();
        }

        }  */

    async componentDidMount(){
        let res = await fetch('http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/DisplayBooksServlet'
            /* "http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/DisplayBooksServlet" */,{
            method:"GET",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                /* "Access-Control-Allow-Origin": "*" */
               }
        })
        // console.log(res.json());
        // console.log(res.json());
        const setBooks = await res.json();
        if(res.ok){
            this.setState({
                books:setBooks,
                isLoading:'true'
            })
            console.log("data in react " , setBooks)
        }else{
            this.setState({
                errorFound:'true'
            })
            console.log("catch error")
        }
        console.log("allBooks", this.state.books)
       
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite"; //navajowhite
    }   

    /* handleDelete = async () =>{
        let resDelete = await fetch(" http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/DeleteBookServlet?ID=" + books.ID,{
            method:"GET",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
        })
        console.log(resDelete)
    } */

    renderBooks= () => {
        
         if(this.state.books.length > 0){
            console.log("ok")
        }else{
            console.log(" not ok")
        }   
        /* const newTo = { 
            pathname: "/Editbook/1", 
            param1: "Par1" 
          }; */
        const listItems = this.state.books.map((book) => 
        <tr key={book.ID}>
            <td>{book.ID}</td>
            <td>{book.title}</td>
            <td>{book.publisher}</td>
            <td>{book.category}</td>
            <td>{book.year}</td>
            <td>{book.hide}</td>
            <td> 
               {/*  Delete Button */}
                <button className='action-btn'>
                <FaTrashAlt size={20}
                onClick={ async () => {
                        let resDelete = await fetch(" http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/DeleteBookServlet?ID=" + book.ID,{
                            method:"GET",
                            headers : { 
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                        })
                        console.log(resDelete)
                        if(resDelete.ok){
                         /*    return(
                                <Modal title="Basic Modal" 
                                visible="true"
                                onOk={this.handleOk()} 
                                onCancel={this.handleCancel()}>
                                    <p>Record deleted, please refresh the page</p>
                                </Modal>
                            ) */
                            alert("Record deleted, please refresh the page") 
                        }
                }}
                />
                {/* Update Button */}
                </button> 
                 <Link to={ /* newTo */ '/Editbook/'+book.ID} ><button className='action-btn'>
                    <FaEdit size={20}/> 
                </button>
                </Link>
                {/* Hide Button */}
                <button className='action-btn'
                  onClick={async () => {
                    let resHide = await fetch(" http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/HideServlet?ID=" + book.ID,{
                    method:"GET",
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                })
                console.log(resHide)
                if(resHide.ok){
                    alert("Hide status Updated, please refresh the page")
                }else {
                    alert(" Hide ststus not Upgated")
                }
                }}
                >
                    <FaRegWindowClose size={20}/> 
                </button>
            </td> 
        </tr>
        );
        return listItems;
        /* return this.state.books.map(book =>{
            return(
                <tr key={book.ID}>
                    <td>{book.ID}</td>
                    <td>{book.title}</td>
                    <td>{book.publisher}</td>
                    <td>{book.category}</td>
                    <td>{book.year}</td>
                    <td>{book.hide}</td>
                    <td><button className='action-btn'><FaTrashAlt size={20}/></button>
                            <button className='action-btn'><FaEdit size={20}/> </button>
                            <button className='action-btn'><FaRegWindowClose size={20}/> </button>
                    </td> 
                </tr>
            )
        })  */
    }
    
    
    render(){

        return(
            <div>
                 <div className="navBar-displayBooks">
                
                    <FaBook size={20}/>  <h5 >All Books</h5>
                    <div className='align-btn'>
                    <Link to="/Admin"><button className="navigate-dashboard">
                        <FaArrowCircleLeft size={20}/> Dashboard  
                        </button>
                    </Link>
                </div>
                </div>
                <div className='display'>
                 <ReactBootStarp.Table striped bordered hover className='table-display'>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Publisher</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Hide</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                              {this.renderBooks()} 
                        </tbody>
                        </ReactBootStarp.Table> 

                </div>
            </div>
        )
    }
}
export default DisplayBooks;