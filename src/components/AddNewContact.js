import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"
// import  { axios } from "axios";

const AddNewContact = () => {

  let histstory = useHistory();
  // states for all the inputs
  const [user, setUser] = useState({
    name: "",
    email: "",
    worknumber: "",
    phone: "",
    address: "",
  });
//  destructure
  const {name,email,worknumber,phone,address} = user;

  const onInputChange =(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
  }

  const onSubmit = async (e)=>{
   e.preventDefault();
   //post method
   await axios.post("http://localhost:5000/contacts",user);
   histstory.push("/");
  }
  return (
    <><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1  style={{ color:"white"}}> Add New Contact Details</h1>
            {/* editing input fields*/}
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group" autoComplete="off">
              {/* name */}
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={name}
                  onChange={e =>{onInputChange(e)}}
                  autoComplete="off"
 
                />
                <br />
                {/* email */}
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="enter your email"
                  name="email"
                  value={email}
                  onChange={e =>{onInputChange(e)}}
                  autoComplete="off"
                />
                <br />
                {/* work number */}
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="enter your work number"
                  name="worknumber"
                  value={worknumber}
                  onChange={e =>{onInputChange(e)}}
                  autoComplete="off"
                />
                <br />
                {/* phone number */}
                <input
                  className="form-control form-control-lg"
                  type="number"
                  placeholder="enter your phone number"
                  name="phone"
                  value={phone}
                  onChange={e =>{onInputChange(e)}}
                  autoComplete="off"
                />
                <br />
                {/* address */}
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="enter your address"
                  name="address"
                  value={address}
                  onChange={e =>{onInputChange(e)}} 
                  autoComplete="off"
                />
                <br />
                {/* add contact button */}
                <button className="btn btn-secondary"> Add New Contact</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNewContact;
