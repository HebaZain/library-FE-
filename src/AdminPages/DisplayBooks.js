import React , {Component}  from 'react';
import { FaBook } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import * as ReactBootStarp from 'react-bootstrap';
import { createBrowserHistory } from "history";
 


import {Link} from "react-router-dom";
import './DisplayBooks.css';
class DisplayBooks extends Component{
     constructor(){
        super()
        this.state={
            books:[],
            isLoading:"false",
            errorFound:"false"
        }
    } 
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
        let res = await fetch("http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/DisplayBooksServlet",{
            method:"GET",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
     /* returnID = (id) =>{
        console.log("ID selected is ", id);
      } */

    renderBooks= () => {
        
         if(this.state.books.length > 0){
            console.log("ok")
        }else{
            console.log(" not ok")
        }   
        const newTo = { 
            pathname: "/Editbook/1", 
            param1: "Par1" 
          };
        const listItems = this.state.books.map((book) => 
        <tr key={book.ID}>
            <td>{book.ID}</td>
            <td>{book.title}</td>
            <td>{book.publisher}</td>
            <td>{book.category}</td>
            <td>{book.year}</td>
            <td>{book.hide}</td>
            <td> 
                <button className='action-btn'><FaTrashAlt size={20}/></button>
                 <Link to={ newTo/* '/Editbook/:ID'+book.ID */} ><button className='action-btn'  
                //"/Editbook"
                /* onClick={ () => this.returnID(book.ID)}   */>
                    <FaEdit size={20}/> 
                </button>
                 
                </Link>
                <button className='action-btn'><FaRegWindowClose size={20}/> </button>
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
                </div>
               {/*  {this.renderBooks} */}
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