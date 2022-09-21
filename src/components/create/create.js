import React from "react";
import { useState } from "react";
import axios from "axios";
import "../../../src/index.css";
import "../create/create.css";
import Readdata from "C:/Users/ManikantaKatta/Desktop/crudoperation/src/components/Read/read.js";

const Create = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [collegename, setcollegename] = useState("");
  const [department, setdepartment] = useState("");
  const [storage,setstorage] = useState("");

  async function FormSubmit(e) {
    e.preventDefault();
    let std = new Object();

    try {
      if (firstname == null || firstname === "") {
        alert("enter your firstname");
      }
      if (lastname == null || lastname === "") {
        alert("enter your lastname");
      }
      if (collegename == null || collegename === "") {
        alert("enter your collegename");
      }
      if (department == null || department === "") {
        alert("enter your department");
      } else {
        std.firstname = firstname;
        std.lastname = lastname;
        std.collegename = collegename;
        std.department = department;

        localStorage.setItem("firstname",firstname);
        localStorage.setItem("lastname",lastname);
        localStorage.setItem("collegename",collegename);
        sessionStorage.setItem("firstname",firstname);
        sessionStorage.setItem("lastname",lastname);

    
        await axios
          .post(
            "https://crudcrud.com/api/1fa25d9ef9f547e895f27eaaf400374f/users",
            std
          )
          .then(() => {
            alert("are you sure want to add user data");
          });
         
      }
    } catch (error){
      console.log(error.message);
    }
    // window.location.reload(false);
    const setstorage = window.sessionStorage.removeItem("firstname");
    console.log(setstorage);
  }

  return (
    <div className="container">
      <div className="a">
        <div className="w-75 mx-auto shadow p-5">
          <form>
            <div id="ht">
              <h2>Student Information</h2>
              <br />
            </div>

            <div className="form-inline row">
              <label className="col-sm-2 col-form-label">First Name :</label>
              <input
                id="firstname"
                className="form-control form-control-lg"
                onChange={(e) => setfirstname(e.target.value)}
                placeholder="firstname"
              />
            </div>

            <div className="form-inline row">
              <label className="col-sm-2 col-form-label">Last Name :</label>
              <input
                id="lastname"
                className="form-control form-control-lg"
                onChange={(e) => setlastname(e.target.value)}
                placeholder="lastname"
              />
            </div>

            <div className="form-inline row">
              <label className="col-sm-2 col-form-label">College Name :</label>
              <input
                id="collegename"
                className="form-control form-control-lg"
                onChange={(e) => setcollegename(e.target.value)}
                placeholder="collegename"
              />
            </div>

            <div className="form-inline row">
              <label className="col-sm-2 col-form-label">Department :</label>
              <input
                id="department"
                className="form-control form-control-lg"
                onChange={(e) => setdepartment(e.target.value)}
                placeholder="department"
              />
            </div>

            <button
              type="submit"
              id="Btn"
              className="bg-warning "
              onClick={FormSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Create;
