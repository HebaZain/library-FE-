import React , {Component}  from 'react';
import { FaBook } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import * as ReactBootStarp from 'react-bootstrap';
import './DisplayBooks.css';
class DisplayBooks extends Component{
    state={
            id:'1',
            title:'ll',
            publisher:'mm',
            category:"dd",
            price:"10"

        }
    
    
    renderBooks(){
        return(
                    <tr>
                    <td>{this.state.id}</td>
                    <td>{this.state.title}</td>
                    <td>{this.state.publisher}</td>
                    <td>{this.state.category}</td>
                    <td>{this.state.price}</td>
                    <td><button><FaTrashAlt size={20}/></button>
                    <button><FaEdit size={20}/> </button>
                    </td> 
                </tr>
                   
        )
    }  
    componentDidMount() {
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite"; //navajowhite
    }

    render(){
        return(
            <div>
                 <div className="navBar-displayBooks">
                <FaBook size={20}/>  <h5 >All Books</h5>
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
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{this.state.id}</td>
                            <td>{this.state.title}</td>
                            <td>{this.state.publisher}</td>
                            <td>{this.state.category}</td>
                            <td>{this.state.price}</td>
                            <td><button className='action-btn'><FaTrashAlt size={20}/></button>
                            <button className='action-btn'><FaEdit size={20}/> </button>
                            <button className='action-btn'><FaRegWindowClose size={20}/> </button>
                            </td> 
                         </tr>
                        </tbody>
                        </ReactBootStarp.Table>

                </div>
            </div>
        )
    }
}
export default DisplayBooks;