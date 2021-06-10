import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory,useParams } from "react-router-dom"
// import  { axios } from "axios";

const EditContact = () => {

  let histstory = useHistory();
  let { id } = useParams();
 
  const [user, setUser] = useState({
    name: "",
    email: "",
    worknumber: "",
    phone: "",
    address: "",
  });
  //destructuring 
  const {name,email,worknumber,phone,address} = user;

  useEffect(() => {
     loadContacts();
  }, [])

  const onInputChange =(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
  }

  const onSubmit = async (e)=>{
   e.preventDefault();
   //put method
   await axios.put(`http://localhost:5000/contacts/${id}`,user); 
   histstory.push("/");
  }

  const loadContacts = async() =>{
    //get method
 const result = await axios.get(`http://localhost:5000/contacts/${id}`);
 setUser(result.data)
  }

  return (
    <><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1  style={{ color:"white"}}> Edit Selected Contact</h1>
            {/* editing input fields*/}
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group" autoComplete="off">
                {/* name */}
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="edit your name"
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
                  placeholder="edit your email"
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
                  placeholder="edit your work number"
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
                  placeholder="edit your phone number"
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
                  placeholder="edit your address"
                  name="address"
                  value={address}
                  onChange={e =>{onInputChange(e)}} 
                  autoComplete="off"
                />
                <br />
                {/* update button */}
                <button className="btn btn-warning"> Update Contact</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditContact;
