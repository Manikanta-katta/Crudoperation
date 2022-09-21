import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "C:/Users/ManikantaKatta/Desktop/crudoperation/src/components/Read/read.css";

const Readdata = () => {
  const [data, setdata] = useState([]);
  const fetchurl =
    "https://crudcrud.com/api/1fa25d9ef9f547e895f27eaaf400374f/users";

  const getData = () => fetch(fetchurl).then((res) => res.json());

  useEffect(() => {
    getData()
      .then((data) => setdata(data))
      .then(() => {});
  }, []);

  const onDelete = (id) => {

    axios
      .delete(
        `https://crudcrud.com/api/1fa25d9ef9f547e895f27eaaf400374f/${id}`
      )
      .then(() => {
        getData();
      });
    // window.location.reload(false);
 
  };
  return (
    <div className="card">
      <table className="table">
        <thead>
          <tr id="tr">
            <th id="th">Firstname &nbsp;</th>
            <th id="th">Lastname &nbsp;</th>
            <th id="th">Collegename &nbsp;</th>
            <th id="th">Department &nbsp;</th>

            <th id="th">Operation &nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr className="trow" id="t-row"key={i}>
              <td id="td">{item.firstname}</td>
              <td id="td">{item.lastname}</td>
              <td id="td">{item.collegename}</td>
              <td id="td">{item.department}</td>

              <td>
                <button
                  id="delete"
                  className="card-2 bg-warning"
                  onClick={() => onDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Readdata;
