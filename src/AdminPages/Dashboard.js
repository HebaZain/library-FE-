import React , {Component} from "react";
import { FaHome } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Dashboard.css';
class Admin_Dash extends Component{
    render(){
        return(
            <div>
                <div className="navBar-dashboard">
                <FaHome size={20}/>  <h5 className="font-dashboard">Admin Dashboard</h5>
                </div>
                <div className='options'>
                    <Link to="/addBooks"><button className="btn-dashboard"><i className='icon-dashboard'><FaFolderPlus size={50}/></i>
                    <br></br> Add Book</button> </Link>
                    <Link to= "/displayBooks"><button className="btn-dashboard"><i className='icon-dashboard'><FaFileAlt size={50}/></i>
                    <br></br> All Books</button></Link>
                    <Link to = "/logout"><button className="btn-dashboard"><i className='icon-dashboard'><FaSignOutAlt size={50}/></i>
                    <br></br> Log out</button></Link>

                </div>

            </div>
        )
    }
}
export default Admin_Dash;