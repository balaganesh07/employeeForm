import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AddEmployees({ list, submitForm }) {
  let initialValue = {
    id: "",
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
  };

  const [employeeData, setEmployeeData] = useState(initialValue);
  const [errors, setError] = useState({});

  const errorMessage = () => {
    const errormsg = {};

    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(employeeData.email).toLowerCase());

    if (employeeData.employeeName === "") errormsg.employeeName = "Enter your name";
    if (employeeData.gender === "") errormsg.gender = "Select your gender";
    if (employeeData.bloodGroup === "") errormsg.bloodGroup = "Enter your blood group";
    if (employeeData.birth === "") errormsg.birth = "Select your date of birth";
    if (employeeData.status === "") errormsg.status = "Select your marital status";
    if (employeeData.email === "") errormsg.email = "Enter your email address";
      else if (!validEmail) errormsg.email = "Enter valid email address";
    if (employeeData.phone === "") errormsg.phone = "Enter your phone number";
      else if (employeeData.phone.length < 10) errormsg.phone = "Enter a valid phone number";
    if (employeeData.fatherName === "") errormsg.fatherName = "Enter your father name";
    if (employeeData.fatherOccupation === "") errormsg.fatherOccupation = "Enter your father occupation";
    if (employeeData.fatherPhone === "") errormsg.fatherPhone = "Enter your father phone number";
      else if (employeeData.fatherPhone.length < 10) errormsg.fatherPhone = "Enter a valid phone number";
    if (employeeData.degree === "") errormsg.degree = "Enter your degree";
    if (employeeData.institution === "") errormsg.institution = "Enter your institution name"    
    if (employeeData.percentage === "") errormsg.percentage = "Enter your percentage"    
    if (employeeData.address === "") errormsg.address = "Enter your address"    
    if (employeeData.city === "") errormsg.city = "Enter your city"    
    if (employeeData.pincode === "") errormsg.pincode = "Enter your pincode"    
    if (employeeData.state === "") errormsg.state = "Enter your state"    
    if (employeeData.nationality === "") errormsg.nationality = "Enter your nationality"    
    if (employeeData.previousCompany === "") errormsg.previousCompany = "Enter your previous company"     
    if (employeeData.designation === "") errormsg.designation = "Enter your designation"    
    if (employeeData.experience === "") errormsg.experience = "Enter your experience"    
    
    return errormsg;
  };

  const submitData = async (data) => {
    const newErrors = errorMessage();

    if(submitForm){
      submitForm(data)
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    } else {
      setError("");
    }

    const localData = localStorage.getItem("employeeDetails")
      ? JSON.parse(localStorage.getItem("employeeDetails"))
      : [];

    if (employeeData.id) {
      const newArr = localData.findIndex((i) => i.id === list.id);
      localData[newArr] = employeeData;

      toast.success("Employee updated successfully");
      localStorage.setItem("employeeDetails", JSON.stringify(localData));
    } else {

      employeeData["id"] = localData.length > 0 ? localData[localData.length - 1].id + 1 : 1;
      const employeeList = [...localData];
      employeeList.push(employeeData);

      toast.success("Employee added successfully");
      localStorage.setItem("employeeDetails", JSON.stringify(employeeList));
    }
  };

  const changeHandler = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const numberHandler = (e) => {
    const re = /[0-9]|\./;

    if (e.target.value === "" || re.test(e.target.value)) {
      setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    }
  };

  const resetForm = () => {
    // window.location.reload();
  }

  useEffect(() => {
    setEmployeeData(list);
  }, [list]);

  return (
    <div>
      <Container>
        <h4 className="pt-4">Add Employees</h4>
        <Card className="p-4">
          <Form onSubmit={submitData} data-testid="form">
            <h6>Personal Details</h6>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.employeeName}
                    name="employeeName"
                    placeholder="Enter your name"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="employeeName"
                  />
                  {errors?.employeeName && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.employeeName}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    onChange={(e) => changeHandler(e)}
                    value={employeeData?.gender}
                    data-testid="gender"
                  >
                    <option value="">Choose here</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                  {errors?.gender && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.gender}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.bloodGroup}
                    name="bloodGroup"
                    placeholder="Enter your bloodGroup"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="bloodGroup"
                  />
                  {errors?.bloodGroup && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.bloodGroup}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    value={employeeData?.birth}
                    name="birth"
                    onChange={(e) => changeHandler(e)}
                    data-testid="birth"
                  />
                  {errors?.birth && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.birth}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Control
                    as="select"
                    name="status"
                    onChange={(e) => changeHandler(e)}
                    value={employeeData?.status}
                    data-testid="status"
                  >
                    <option value="">Choose here</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widow">Widow</option>
                  </Form.Control>
                  {errors?.status && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.status}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.email}
                    name="email"
                    placeholder="Enter your email address"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="email"
                  />
                  {errors?.email && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.email}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.phone}
                    maxLength={10}
                    name="phone"
                    placeholder="Enter your phone no"
                    onChange={(e) => numberHandler(e)}
                    autoComplete="off"
                    data-testid="phone"
                  />
                  {errors?.phone && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.phone}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h6>Father's Details</h6>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Father's Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.fatherName}
                    name="fatherName"
                    placeholder="Enter your father's name"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="fatherName"
                  />
                  {errors?.fatherName && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.fatherName}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Father's Occupation</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.fatherOccupation}
                    name="fatherOccupation"
                    placeholder="Enter your father's occupation"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="fatherOccupation"
                  />
                  {errors?.fatherOccupation && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.fatherOccupation}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Father's Phone No </Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.fatherPhone}
                    name="fatherPhone"
                    maxLength={10}
                    placeholder="Enter your father's phone no"
                    onChange={(e) => numberHandler(e)}
                    autoComplete="off"
                    data-testid="fatherPhone"
                  />
                  {errors?.fatherPhone && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.fatherPhone}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h6>Education Qualification</h6>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Degree</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.degree}
                    name="degree"
                    placeholder="Enter your degree"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="degree"
                  />
                  {errors?.degree && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.degree}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Institution</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.institution}
                    name="institution"
                    placeholder="Enter your institution"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="institution"
                  />
                  {errors?.institution && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.institution}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Percentage</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.percentage}
                    name="percentage"
                    maxLength={2}
                    placeholder="Enter your percentage"
                    onChange={(e) => numberHandler(e)}
                    autoComplete="off"
                    data-testid="percentage"
                  />
                  {errors?.percentage && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.percentage}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h6>Residential Address</h6>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={employeeData?.address}
                    name="address"
                    placeholder="Enter your address"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="address"
                  />
                  {errors?.address && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.address}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.city}
                    name="city"
                    placeholder="Enter your city"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="city"
                  />
                  {errors?.city && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.city}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.pincode}
                    name="pincode"
                    maxLength={6}
                    placeholder="Enter your pincode"
                    onChange={(e) => numberHandler(e)}
                    autoComplete="off"
                    data-testid="pincode"
                  />
                  {errors?.pincode && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.pincode}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.state}
                    name="state"
                    placeholder="Enter your state"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="state"
                  />
                  {errors?.state && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.state}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Nationality</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.nationality}
                    name="nationality"
                    placeholder="Enter your nationality"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="nationality"
                  />
                  {errors?.nationality && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.nationality}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h6>Work Experience</h6>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Previous Company</Form.Label>
                  <Form.Control
                    tyoe="text"
                    value={employeeData?.previousCompany}
                    name="previousCompany"
                    placeholder="Enter your previous company"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="previousCompany"
                  />
                  {errors?.previousCompany && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.previousCompany}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.designation}
                    name="designation"
                    placeholder="Enter your designation"
                    onChange={(e) => changeHandler(e)}
                    autoComplete="off"
                    data-testid="designation"
                  />
                  {errors?.designation && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.designation}
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Total Experience</Form.Label>
                  <Form.Control
                    type="text"
                    value={employeeData?.experience}
                    name="experience"
                    maxLength={3}
                    placeholder="Enter your experience"
                    onChange={(e) => numberHandler(e)}
                    autoComplete="off"
                    data-testid="experience"
                  />
                  {errors?.experience && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {errors?.experience}
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <div className="text-right">
              <Button type="submit" data-testid="save" className="mr-3 btn-success" value="submit">
                Register
              </Button>
              <Button type="button" data-testid="reset" onClick ={resetForm}className="btn-secondary">
                Reset
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default AddEmployees;
