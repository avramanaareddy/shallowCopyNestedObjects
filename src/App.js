import React from "react";
import "./styles.css";

export default function App() {
  const person = {
    name: "ramana",
    address: {
      city: "Hyderabad",
      state: "telangana",
      country: "India"
    }
  };
  const updatedPerson = { ...person, name: "Venkata"
};
//if you uncomment here and check then you will come to know that it is shallow copy.
// because if you change the original object then nested object value also gets change.
//person.address.city='Atlanta'

  return (
    <div className="App">
      <h3>Original person</h3>
      <p>
        Persona Name: {person.name}
        <br />
        <br />
        <b>Person Address:</b>
        <br />
        <b>City</b>:{person.address.city}
        <br />
        <b>State</b>:{person.address.state}
        <br />
        <b>Country</b>:{person.address.country}
      </p>
      <h3>Doing shallow copy, changed the address of the copied object, when printed first person data also changed </h3>
      <hr />
      <h3>Updated person</h3>
      <p>
        Persona Name: {updatedPerson.name}
        <br />
        <br />
        <b>Person Address:</b>
        <br />
        <b>City</b>:{updatedPerson.address.city}
        <br />
        <b>State</b>:{updatedPerson.address.state}
        <br />
        <b>Country</b>:{updatedPerson.address.country}
      </p>
    </div>
  );
}
