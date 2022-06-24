import React from "react";
import { useState } from "react";
import axios from "axios";
import '../../../src/index.css';
import "../create/create.css";
import Readdata from "C:/Users/ManikantaKatta/Desktop/crudoperation/src/components/Read/read.js";

const Create = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [collegename, setcollegename] = useState("");
  const [department, setdepartment] = useState("");
  const [mobileno, setmobileno] = useState("");

  async function FormSubmit(e) {
    e.preventDefault();
    let std = new Object();
    std.firstname = firstname;
    std.lastname = lastname;
    std.collegename = collegename;
    std.department = department;
    std.mobileno = mobileno;
    console.log(std);
    try {
      await axios.post(
        "https://crudcrud.com/api/3ffb366cad60472d9a03c033f08f841e/users",
        std
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="tiger">
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
                className="form-control form-control-lg"
                onChange={(e) => setfirstname(e.target.value)}
                placeholder="firstname"
              />
              </div>

              <div className="form-inline row">
              <label className="col-sm-2 col-form-label">
                Last Name :
              </label>
              <input
                className="form-control form-control-lg"
                onChange={(e) => setlastname(e.target.value)}
                placeholder="lastname"
              />
              </div>

              <div className="form-inline row">
              <label className="col-sm-2 col-form-label">
                College Name :
              </label>
              <input
                className="form-control form-control-lg"
                onChange={(e) => setcollegename(e.target.value)}
                placeholder="collegename"
              />
              </div>

              <div className="form-inline row">
              <label className="col-sm-2 col-form-label">Department :</label>
              <input
                className="form-control form-control-lg"
                onChange={(e) => setdepartment(e.target.value)}
                placeholder="department"
              />
              </div>

       

              <button type="submit" id="btn" className="bg-warning " onClick={FormSubmit}>
                Submit
              </button>
           
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Create;
