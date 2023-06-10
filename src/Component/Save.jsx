import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { DEFAULT_MIN_BREAKPOINT } from "react-bootstrap/esm/ThemeProvider";

function Save() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    countryid:"",
  });

  const[countryId, setCountryId] = useState();

  useEffect(()=>{
    const url = 'https://localhost:7115/api/User/Countries'
    axios.get(url).then((response)=>{
      setCountryId(response.data)
    })
  },[])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://localhost:7115/api/User/Save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <Fragment>
       <form onSubmit={handleSubmit}>
        <table class="table_save">
        <tbody>
        <tr>
        <td><label htmlFor="firstname">First Name</label></td>
        <td><input type="text" id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}/></td>
      </tr>
      <tr>
        <td><label htmlFor="lastname">Last Name</label></td>
        <td><input type="text" id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange} /></td>
      </tr>
      <tr>
        <td><label htmlFor="email">Email</label></td>
        <td><input type="email"           id="email"
          name="email"
          value={formData.email}
          onChange={handleChange} /></td>
      </tr>
      <tr>
        <td><label htmlFor="password">Password</label></td>
        <td><input type="password" id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}/></td>
      </tr>
      {/*<tr>
        <td><label htmlFor="repassword">Re-Enter Password</label></td>
        <td><input type="password" value={formData.rePassword} className="form-control" name="rePassword"
         onChange={handleOnChange} /></td>
      </tr>*/}
      
      <tr>
        <td><label htmlFor="dob">Date of Birth</label></td>
        <td><input type="date" id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange} /></td>
      </tr>
      <tr>
        <td><label htmlFor="gender">Gender</label></td>
        <td>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="male"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange} />
            <label htmlFor="male" className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="female"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}/>
            <label htmlFor="female" className="form-check-label">Female</label>
          </div>
        </td>
      </tr>
      <tr>
        <td><label htmlFor="address">Address</label></td>
        <td><textarea  id="address"
          name="address"
          value={formData.address}
          onChange={handleChange} rows="3"></textarea></td>
      </tr>
      <tr>
        <td><label htmlFor="city">City</label></td>
        <td><input type="text" className="form-control" id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}/></td>
      </tr>
      
      <tr>
        <td><label htmlFor="country">Country</label></td>
        <td> <select name="" id="">
        { countryId ?
        countryId.map((country)=>{
          return <option>{country.name}</option>

        }): null }
        </select>
        
        </td>
      </tr>

      <tr>
        <td><label htmlFor="state">State</label></td>
        <td> <select name="" id="" onChange={(e)=>{
          console.log(e.target.value)
        }}> 
        { countryId ?
        countryId.map((country)=>{
          return <option key={countryId.id}
          value={countryId.Id}>
          {country.name}
          </option>

          
        }): null }
        </select>
        
        </td>
      </tr>  
      <tr>
      <td><label htmlFor="contanct">Contact Number</label></td>
      <td><input type="text" class="form-control" name="contanct"
       value={formData.contanct}  onChange={handleChange} placeholder="Enter contact number">
      </input></td>
          <td>
            <select  onChange={handleChange} class="form-control">
              <option value="phone">Phone</option>
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="other">Other</option>
            </select>
          </td>
          <td>
            <button type="button" class="btn btn-primary remove-contact"><i class="fa fa-plus"></i></button>
            <button type="button" class="btn btn-danger remove-contact"><i class="fa fa-trash"></i></button>
          </td>
        </tr> 
      
        <button className='save-btn btn btn-primary' type="submit">Save</button>          
    </tbody>
    </table>
   
    </form>
    </Fragment>
  )
};

export default Save;