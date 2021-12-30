import React , {Component}  from 'react';
import "./SearchResult.css";
import { FaSearch } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
class SearchResult extends Component{
    constructor(props){
        super(props)
    }
    state={
        bookDetails:{}
    }

    async componentDidMount(){

        let searchResp = await fetch("http://localhost:8080/libraryManApp-0.0.1-SNAPSHOT/SearchServlet?title="+ this.props.match.params.title ,{
            method:"get",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        let setbookDetails =await searchResp.json()
        console.log(setbookDetails)
        if(searchResp.ok){
        this.setState({
            bookDetails:setbookDetails
        })
        console.log("this is data",this.state.bookDetails)
    }else{
        alert("This book in not avilalbe")
    }
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor="navajowhite";
    }
     

    render(){
        return(
            <div>
                <div className="navBar-search">
                <FaSearch size={20}/>  <h5 className="user-search" >Search Result</h5>
                <div className='align-btn-search'>
                    <Link to="/User"><button className="navigate-user-books">
                        <FaArrowCircleLeft size={20}/> Display All Books  
                        </button>
                    </Link>
                </div>
                </div>
                <div className='to-center'>

                    <div className="to-flex-search">
                        <div className="container-search">
                            <div style={{display: "flex", justifyContent: "center",margin: "10px"}}>
                            <FaBookOpen size={40}/>
                            </div>
                            <p><FaAngleRight /> ID: {this.state.bookDetails.ID}</p>
                            <p><FaAngleRight /> Title: {this.state.bookDetails.title}</p>
                            <p><FaAngleRight /> Publisher: {this.state.bookDetails.publisher}</p>
                            <p><FaAngleRight /> Category: {this.state.bookDetails.category}</p>
                            <p><FaAngleRight /> Year: {this.state.bookDetails.year}</p>
                        </div>
                    </div>  
                    </div>
              
                </div>
        )
    }
}
export default withRouter (SearchResult);