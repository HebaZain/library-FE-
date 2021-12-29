import { Component } from "react";
import { FaAddressBook } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './UserBooks.css';

class UserBooks extends Component{
    state ={
        userBooks:[],
        bookAction:[],
        bookFantasy:[]
    }

    async componentDidMount() {

        let response = await fetch("http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/UserBooksAction",{
            method:"get",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })

        const setUserBooks= await response.json();
        console.log(setUserBooks);
        if(response.ok){
            this.setState({
                userBooks:setUserBooks
            })
        }
        const setbookAction= this.state.userBooks.filter((action) => {
            return action.category == "Action";
        })
        this.setState({
            bookAction:setbookAction
        })
        const setbookFantacy= this.state.userBooks.filter((fantacy) => {
            return fantacy.category == "Fantasy";
        })
        this.setState({
            bookFantasy:setbookFantacy
        })
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite";
    } 
    render(){
        
        return(
            <div>
                <div className="navBar-userBooks">
                <FaAddressBook size={20}/>  <h5 className="user-books" >Hello</h5>
                 <input type="text" 
                className='search-in'
                placeholder='Serach'
                ></input>
                <button className='search-btn'> <FaSearch /></button> 
                </div>

                <div className="Action-books">
                    <h4 className="category"> Action </h4>
                    {this.state.bookAction.map(action =>{
                        return(
                            <div className="to-flex">
                                <div className="container-action">
                                    <div style={{display: "flex", justifyContent: "center",margin: "10px"}}>
                                    <FaBookOpen size={40}/>
                                    </div>
                                <p><FaAngleRight /> Title: {action.title}</p>
                                <p><FaAngleRight /> Publisher: {action.publisher}</p>
                                <p><FaAngleRight /> Category: {action.category}</p>
                                <p><FaAngleRight /> Year: {action.year}</p>
                                </div>
                            </div>    
                        )
                    })}
                </div>
                <div className="Fan-books">
                    <h4 className="category"> Fantasy </h4>
                    {this.state.bookFantasy.map(fa =>{
                        return(
                            <div className="to-flex">
                                <div className="container-action">
                                    <div style={{display: "flex", justifyContent: "center",margin: "10px"}}>
                                    <FaBookOpen size={40}/>
                                    </div>
                                <p><FaAngleRight /> Title: {fa.title}</p>
                                <p><FaAngleRight /> Publisher: {fa.publisher}</p>
                                <p><FaAngleRight /> Category: {fa.category}</p>
                                <p><FaAngleRight /> Year: {fa.year}</p>
                                </div>
                            </div>    
                        )
                    })}
                    
                </div>



            </div>
        )
    }



}
export default UserBooks;