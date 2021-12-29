import React , {Component} from "react";
import { FaUserShield } from "react-icons/fa";
import { FaUser } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import './Home.css';
function Home(){

    return(
        <div className="container-home">
            <h2>WELCOME ^^ </h2>
            <div className="sign-as">
                <h3>Sing in as :</h3>
                 <Link to='/Admin'> <button className="choose-sign" > <FaUserShield/>  Admin</button><br></br>  </Link> 
                <Link to='/User'><button className="choose-sign"> <FaUser/> User</button></Link>
            </div>
        </div>
    )

}
export default Home;