import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddEmployees from "../Employees/AddEmployees";

describe("EmployeeForm", () => {
  it("should render the basic fields", () => {
    const {getByTestId} = render(<AddEmployees />);

    const name = getByTestId("employeeName");
      expect(name).toBeInTheDocument()

      const gender = getByTestId("gender");
      expect(gender).toBeInTheDocument()

      const bloodGroup = getByTestId("bloodGroup");
      expect(bloodGroup).toBeInTheDocument()

      const birth = getByTestId("birth");
      expect(birth).toBeInTheDocument()

      const status = getByTestId("status");
      expect(status).toBeInTheDocument()

      const email = getByTestId("email");
      expect(email).toBeInTheDocument()

      const phone = getByTestId("phone");
      expect(phone).toBeInTheDocument()

      const fatherName = getByTestId("fatherName");
      expect(fatherName).toBeInTheDocument()

      const fatherOccupation = getByTestId("fatherOccupation");
      expect(fatherOccupation).toBeInTheDocument()

      const fatherPhone = getByTestId("fatherPhone");
      expect(fatherPhone).toBeInTheDocument()

      const degree = getByTestId("degree");
      expect(degree).toBeInTheDocument()

      const institution = getByTestId("institution");
      expect(institution).toBeInTheDocument()

      const percentage = getByTestId("percentage");
      expect(percentage).toBeInTheDocument()

      const address = getByTestId("address");
      expect(address).toBeInTheDocument()

      const city = getByTestId("city");
      expect(city).toBeInTheDocument()

      const pincode = getByTestId("pincode");
      expect(pincode).toBeInTheDocument()

      const state = getByTestId("state");
      expect(state).toBeInTheDocument()

      const nationality = getByTestId("nationality");
      expect(nationality).toBeInTheDocument()

      const previousCompany = getByTestId("previousCompany");
      expect(previousCompany).toBeInTheDocument()

      const designation = getByTestId("designation");
      expect(designation).toBeInTheDocument()

      const experience = getByTestId("experience");
      expect(experience).toBeInTheDocument()

      expect(screen.getByRole("button", { name: /Register/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /Reset/i })).toBeInTheDocument();
  
      const button = getByTestId("save");
      fireEvent.click(button);
      expect(button).toBeTruthy();

      const reset = getByTestId("reset");
      fireEvent.click(reset);
      expect(reset).toBeTruthy();
   
    });
});

describe("add employee", () => {
  describe("with valid inputs", () => {
    it("submit data with valid inputs", async() => {
      const onSubmit = jest.fn();
      const {getByTestId} = render(<AddEmployees submitForm ={onSubmit}/>);

      const name = getByTestId("employeeName");
      // expect(name).toBeTruthy();
      fireEvent.change(name, {target: {value: "test"}});
      expect(name.value).toBe("test")

      const gender = getByTestId("gender");
      fireEvent.change(gender, {target: {value: "Male"}});
      expect(gender.value).toBe("Male")

      const bloodGroup = getByTestId("bloodGroup");
      fireEvent.change(bloodGroup, {target: {value: "O -ve"}});
      expect(bloodGroup.value).toBe("O -ve")

      const birth = getByTestId("birth");
      fireEvent.change(birth, {target: {value: "2021-08-19"}});
      expect(birth.value).toBe("2021-08-19")

      const status = getByTestId("status");
      fireEvent.change(status, {target: {value: "Single"}});
      expect(status.value).toBe("Single")

      const email = getByTestId("email");
      fireEvent.change(email, {target: {value: "test@gmail.com"}});
      expect(email.value).toBe("test@gmail.com")

      const phone = getByTestId("phone");
      fireEvent.change(phone, {target: {value: "9423432432"}});
      expect(phone.value).toBe("9423432432")

      const fatherName = getByTestId("fatherName");
      fireEvent.change(fatherName, {target: {value: "test"}});
      expect(fatherName.value).toBe("test")

      const fatherOccupation = getByTestId("fatherOccupation");
      fireEvent.change(fatherOccupation, {target: {value: "test"}});
      expect(fatherOccupation.value).toBe("test")

      const fatherPhone = getByTestId("fatherPhone");
      fireEvent.change(fatherPhone, {target: {value: "9423432432"}});
      expect(fatherPhone.value).toBe("9423432432")

      const degree = getByTestId("degree");
      fireEvent.change(degree, {target: {value: "test"}});
      expect(degree.value).toBe("test")

      const institution = getByTestId("institution");
      fireEvent.change(institution, {target: {value: "test"}});
      expect(institution.value).toBe("test")

      const percentage = getByTestId("percentage");
      fireEvent.change(percentage, {target: {value: "12"}});
      expect(percentage.value).toBe("12")

      const address = getByTestId("address");
      fireEvent.change(address, {target: {value: "test"}});
      expect(address.value).toBe("test")

      const city = getByTestId("city");
      fireEvent.change(city, {target: {value: "test"}});
      expect(city.value).toBe("test")

      const pincode = getByTestId("pincode");
      fireEvent.change(pincode, {target: {value: "624567"}});
      expect(pincode.value).toBe("624567")

      const state = getByTestId("state");
      fireEvent.change(state, {target: {value: "test"}});
      expect(state.value).toBe("test")

      const nationality = getByTestId("nationality");
      fireEvent.change(nationality, {target: {value: "test"}});
      expect(nationality.value).toBe("test")

      const previousCompany = getByTestId("previousCompany");
      fireEvent.change(previousCompany, {target: {value: "test"}});
      expect(previousCompany.value).toBe("test")

      const designation = getByTestId("designation");
      fireEvent.change(designation, {target: {value: "test"}});
      expect(designation.value).toBe("test")

      const experience = getByTestId("experience");
      fireEvent.change(experience, {target: {value: "5"}});
      expect(experience.value).toBe("5")

      fireEvent.submit(getByTestId("form"))
      expect(onSubmit).toHaveBeenCalled()

    })
  })
})
