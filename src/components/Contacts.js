import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [filtercontact, setFilterContact] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  //load all the data on UI
  const loadContacts = async () => {
    //get method 
    let results = await axios.get("http://localhost:5000/contacts");
    setDatas(results.data);
  };

  // selected contact deletion part
  const deletedata = async (id) => {
    if (
      window.confirm("Are you sure to delete this contact.? if yes press OK")
    ) {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      loadContacts();
    }
  };

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("contactLists", JSON.stringify(datas));
  }, [datas]);

  //  contact searching
  useEffect(() => {
    setFilterContact(
      datas.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, datas]);

  return (
    <div className="container maincontent">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          
          {/* searching */}
          <h3 style={{ color: "white" }}>Search for contact details</h3>{" "}
          <input
            type="text"
            placeholder="enter name.."
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <br />
          <div className="card">
            <div className="card-body">
              {filtercontact.map((data) => (
                <div>
                  <h2 className="card-title">{data.name}</h2>
                  <h6 className="card-subtitle mb-2 text-muted">All details</h6>
                  <h5 className="card-text">
                    Work number : Email : {data.email}
                  </h5>
                  <h5 className="card-text"> Work number :{data.worknumber}</h5>
                  <h5 className="card-text">Home number :{data.phone}</h5>
                  <h5 className="card-text">Address :{data.address}</h5>
                  <br />
                  <Link
                    to={`contacts/edit/${data.id}`}
                    className="btn btn-dark"
                  >
                    Edit Contact
                  </Link>
                  &nbsp;&nbsp;
                  <Link
                    className="btn btn-danger"
                    onClick={() => deletedata(data.id)}
                  >
                    Delete Contact
                  </Link>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
