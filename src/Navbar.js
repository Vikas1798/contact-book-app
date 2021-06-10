import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

  const style={ 
    padding: "70px",
    position:"fixed",
    width:"100%",
    zIndex:"2" ,
    background:" rgb(2,0,36)",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 5%, rgba(9,9,121,1) 22%, rgba(0,212,255,1) 100%)"
  }
  
  return (
    <>
      <div  style={style} >
        <nav>
          <ul style={{ position:"fixed"}} >
            <Link className="btn" to="/">
              <h4  style={{ color:"white"}}>Contact Book App</h4>
            </Link>
            &nbsp;
            <Link className="btn btn-primary"to="/add">
              Add New Contact
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
