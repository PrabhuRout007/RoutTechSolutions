import axios from "axios";
import { Button, Toast } from "bootstrap/dist/js/bootstrap.bundle";
import React, { Fragment, useState, useEffect } from "react";

const UserDetails = () => {
  const [empData, setData] = useState([]);

  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(query);
  }

  async function handleSearch(query) {
    setIsLoading(true);

    try {
      const response = await fetch(`https://localhost:7115/api/User/SearchUsers?searchTerm=${query}`);
      const data = await response.json();
      setResults(data);
      setError(null);
    } catch (err) {
      setError('An error occurred while fetching the search results.');
    }

    setIsLoading(false);
  }

  useEffect(()=>{
    setData(empData);
  },[]);

  useEffect(() => {
    axios
      .get(`https://localhost:7115/api/User/GetUsers`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClickDelete = (id) => {
    if (window.confirm("Are you sure to Delete this record?") === true) {
      axios
        .delete(`https://localhost:7115/api/User/Delete/${id}`)
        .then((response) => {
          if (response.status === 200) {
            Toast.success("User got deleted successfully");
            // Refresh the user data after deletion
            axios
              .get(`https://localhost:7115/api/User/GetUsers`)
              .then((res) => {
                setData(res.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Fragment>
      <div className="container">        
        <table className="table table-hover table-bordered text-center mx-auto">
          <thead className="bg-dark text-light">
            <tr>
              <th>Id</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Date Of Birth</th>
              <th>City</th>
              <th>Country</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {empData && empData.length > 0 ? (
              empData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.fullname}</td>
                    <td>{item.email}</td>
                    <td>{new Date(item.dob).toLocaleDateString()}</td>
                    <td>{item.city}</td>
                    <td>{item.country}</td>
                    <td>
                      <a onClick={() => onClickDelete(item.id)} className="link-danger">
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  Loading......
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default UserDetails;
