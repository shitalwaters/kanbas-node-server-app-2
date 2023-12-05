import * as client from "./client";
import { useState, useEffect } from "react";
import "./account.css";
import { Link, useNavigate, useParams } from 'react-router-dom';

function Account() {
  const navigate = useNavigate(); // Initialize navigate here
  const { id } = useParams();
  const [account, setAccount] = useState({
    password: '',
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    role: 'USER'
  });

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    try {
      const fetchedAccount = await client.account();
      setAccount(fetchedAccount);
    } catch (error) {
      console.error("Failed to fetch account:", error);
    }
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);


  const handleInputChange = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value
    });
  };

  const save = async () => {
    try {
      await client.updateUser(account);
    } catch (error) {
      console.error("Failed to update account:", error);
    }
  };


  const signout = async () => {
    await client.signout();
    navigate("/project/signin"); 
  };


  return (
    <div className="w-50">
      <h1>Account</h1>
      <div>
        <input
          name="password"
          type="password"
          value={account.password}
          onChange={handleInputChange}
          placeholder="Enter password"
        />
        <input
          name="firstName"
          value={account.firstName}
          onChange={handleInputChange}
          placeholder="Enter first name"
        />
        <input
          name="lastName"
          value={account.lastName}
          onChange={handleInputChange}
          placeholder="Enter last name"
        />
        <input
          name="dob"
          value={account.dob}
          onChange={handleInputChange}
          placeholder="Enter date of birth"
        />
        <input
          name="email"
          value={account.email}
          onChange={handleInputChange}
          placeholder="Enter email address"
        />
        <select
          name="role"
          value={account.role}
          onChange={handleInputChange}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
        <button onClick={save} className="btn btn-success">
          Save
        </button>
        <button onClick={signout} className="btn btn-danger"  >
    Signout
  </button>
        <Link to="/project/admin/users" className="btn btn-warning w-10">
    Users
  </Link>
      </div>
    </div>
  );
}

export default Account;
