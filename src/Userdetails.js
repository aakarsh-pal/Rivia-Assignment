import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './user-details.scss' ;
const UserDetails = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch the user details based on the ID
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUserDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-container">
    <div className="user-details-box">
      <h2>User Details for ID: {id}</h2>
      <p>Name: {userDetails.name}</p>
      <p>Username: {userDetails.username}</p>
      <p>Email: {userDetails.email}</p>
      <p>Address: {userDetails.address.city}</p>
      <p>Phone: {userDetails.phone}</p>
    </div>
  </div>
  );
};

export default UserDetails;
