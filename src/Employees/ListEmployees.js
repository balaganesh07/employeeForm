import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Table,
  Button,
} from "react-bootstrap";
import AddEmployees from "./AddEmployees";
import Icon from '@mdi/react'
import { mdiPencil } from '@mdi/js';
import { mdiDeleteOutline } from '@mdi/js';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function ListEmployees() {

  const [employeeData, setEmployeeData] = useState({
    id:"",
    employeeName: "",
    gender: "",
    bloodGroup: "",
    birth: "",
    status: "",
    phone: "",
    email: "",
    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    degree: "",
    institution: "",
    percentage: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    nationality: "",
    previousCompany: "",
    designation: "",
    experience: "",
  });

  const getData = JSON.parse(localStorage.getItem("employeeDetails"));

  const editForm = (value) => {
    setEmployeeData(value);
  };

  const deleteForm = (value) => {
    confirmAlert({
          title: "Confirm to delete",
          message: "Are you sure, you want to delete this",
          buttons: [
            {
              label: "Yes",
              onClick: () =>
              {
              let index = getData.indexOf(value)
              console.log(index);
              getData.splice(index, 1);

              toast.success("Employee deleted successfully")
              localStorage.setItem("employeeDetails", JSON.stringify(getData));
              window.location.reload();
              }
            },
            {
              label: "No"
            },
          ],
        });
  };


  return (
    <div>
      <AddEmployees list={employeeData} />
      <br />
      <Container>
      <h4>Employees List</h4>
        <Card>
          <Table responsive>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Email</th>
                <th>Marital Status</th>
                <th>Mobile</th>
                <th>Father's Mobile</th>
                <th>Degree</th>
                <th>Percentage</th>
                <th>City</th>
                <th>Designation</th>
                <th>Total Experience</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {getData?.length > 0 ?
                getData.map((value, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{value.employeeName}</td>
                      <td>{value.birth}</td>
                      <td>{value.gender}</td>
                      <td>{value.bloodGroup}</td>
                      <td>{value.email}</td>
                      <td>{value.status}</td>
                      <td>{value.phone}</td>
                      <td>{value.fatherPhone}</td>
                      <td>{value.degree}</td>
                      <td>{value.percentage}</td>
                      <td>{value.city}</td>
                      <td>{value.designation}</td>
                      <td>{value.experience}</td>
                      <td>
                        <div className="d-flex">
                            <Button
                            type="edit"
                            className="mr-2 btn-info action-btns"
                            onClick={() => editForm(value)}
                            >
                            <Icon path={mdiPencil}
                                size={.8}
                            />
                            </Button>
                            <Button
                            type="delete"
                            className="btn-danger action-btns"
                            onClick={() => deleteForm(value)}
                            >
                            <Icon path={mdiDeleteOutline}
                                size={.8}
                            />
                            </Button>
                        </div>
                      </td>
                    </tr>
                  );
                }) : <tr>
                  <td colSpan={15}>
                  <div className="text-center">No Data Found</div>
                  </td>
                </tr>}
            </tbody>
          </Table>
        </Card>
      </Container>
    </div>
  );
}

export default ListEmployees;
